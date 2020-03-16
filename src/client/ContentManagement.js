/**
 * Methods for managing content types, libraries and objects
 *
 * @module ElvClient/ContentManagement
 */

const UrlJoin = require("url-join");

const LibraryContract = require("../contracts/BaseLibrary");
const ContentContract = require("../contracts/BaseContent");

const {
  ValidateLibrary,
  ValidateObject,
  ValidateVersion,
  ValidateWriteToken,
  ValidateParameters
} = require("../Validation");

/* Content Type Creation */

/**
 * Create a new content type.
 *
 * A new content type contract is deployed from
 * the content space, and that contract ID is used to determine the object ID to
 * create in the fabric. The content type object will be created in the special
 * content space library (ilib<content-space-hash>)
 *
 * @methodGroup Content Types
 * @namedParams
 * @param libraryId {string=} - ID of the library in which to create the content type. If not specified,
 * it will be created in the content space library
 * @param {string} name - Name of the content type
 * @param {object} metadata - Metadata for the new content type
 * @param {(Blob | Buffer)=} bitcode - Bitcode to be used for the content type
 *
 * @returns {Promise<string>} - Object ID of created content type
 */
exports.CreateContentType = async function({name, metadata={}, bitcode}) {
  this.Log(`Creating content type: ${name}`);

  metadata.name = name;
  metadata.public = {
    name,
    ...(metadata.public || {})
  };

  const { contractAddress } = await this.authClient.CreateContentType();

  const objectId = this.utils.AddressToObjectId(contractAddress);
  const path = UrlJoin("qlibs", this.contentSpaceLibraryId, "qid", objectId);

  this.Log(`Created type: ${contractAddress} ${objectId}`);

  /* Create object, upload bitcode and finalize */
  const createResponse = await this.utils.ResponseToJson(
    this.HttpClient.Request({
      headers: await this.authClient.AuthorizationHeader({
        libraryId: this.contentSpaceLibraryId,
        objectId,
        update: true
      }),
      method: "POST",
      path: path,
      failover: false
    })
  );

  await this.ReplaceMetadata({
    libraryId: this.contentSpaceLibraryId,
    objectId,
    writeToken: createResponse.write_token,
    metadata
  });

  if(bitcode) {
    const uploadResponse = await this.UploadPart({
      libraryId: this.contentSpaceLibraryId,
      objectId,
      writeToken: createResponse.write_token,
      data: bitcode,
      encrypted: false
    });

    await this.ReplaceMetadata({
      libraryId: this.contentSpaceLibraryId,
      objectId,
      writeToken: createResponse.write_token,
      metadataSubtree: "bitcode_part",
      metadata: uploadResponse.part.hash
    });
  }

  await this.FinalizeContentObject({
    libraryId: this.contentSpaceLibraryId,
    objectId,
    writeToken: createResponse.write_token
  });

  return objectId;
};


/* Library creation and deletion */

/**
 * Create a new content library.
 *
 * A new content library contract is deployed from
 * the content space, and that contract ID is used to determine the library ID to
 * create in the fabric.
 *
 * @methodGroup Content Libraries
 *
 * @namedParams
 * @param {string} name - Library name
 * @param {string=} description - Library description
 * @param {blob=} image - Image associated with the library
 * @param {Object=} metadata - Metadata of library object
 * @param {string=} kmsId - ID of the KMS to use for content in this library. If not specified,
 * the default KMS will be used.
 *
 * @returns {Promise<string>} - Library ID of created library
 */
exports.CreateContentLibrary = async function({
  name,
  description,
  image,
  metadata={},
  kmsId,
}) {
  if(!kmsId) {
    kmsId = `ikms${this.utils.AddressToHash(await this.DefaultKMSAddress())}`;
  }

  this.Log("Creating content library");
  this.Log(`KMS ID: ${kmsId}`);

  const { contractAddress } = await this.authClient.CreateContentLibrary({kmsId});

  metadata = {
    ...metadata,
    name,
    description,
    public: {
      name,
      description
    }
  };

  const libraryId = this.utils.AddressToLibraryId(contractAddress);

  this.Log(`Library ID: ${libraryId}`);
  this.Log(`Contract address: ${contractAddress}`);

  // Set library content object type and metadata on automatically created library object
  const objectId = libraryId.replace("ilib", "iq__");

  const editResponse = await this.EditContentObject({
    libraryId,
    objectId,
    options: {
      type: "library"
    }
  });

  await this.ReplaceMetadata({
    libraryId,
    objectId,
    metadata,
    writeToken: editResponse.write_token
  });

  await this.FinalizeContentObject({
    libraryId,
    objectId,
    writeToken: editResponse.write_token
  });

  // Upload image if provided
  if(image) {
    await this.SetContentLibraryImage({
      libraryId,
      image
    });
  }

  this.Log(`Library ${libraryId} created`);

  return libraryId;
};

/**
 * Set the image associated with this library
 *
 * @methodGroup Content Libraries
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {Blob | ArrayBuffer | Buffer} image - Image to upload
 */
exports.SetContentLibraryImage = async function({libraryId, image}) {
  ValidateLibrary(libraryId);

  const objectId = libraryId.replace("ilib", "iq__");

  return this.SetContentObjectImage({
    libraryId,
    objectId,
    image
  });
};

/**
 * Set the image associated with this object
 *
 * Note: The content type of the object must support /rep/image
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {Blob | ArrayBuffer | Buffer} image - Image to upload
 */
exports.SetContentObjectImage = async function({libraryId, objectId, image}) {
  ValidateParameters({libraryId, objectId});

  const editResponse = await this.EditContentObject({
    libraryId,
    objectId
  });

  const uploadResponse = await this.UploadPart({
    libraryId,
    objectId,
    writeToken: editResponse.write_token,
    data: image,
    encrypted: false
  });

  await this.MergeMetadata({
    libraryId,
    objectId,
    writeToken: editResponse.write_token,
    metadata: {
      "image": uploadResponse.part.hash,
    }
  });

  await this.MergeMetadata({
    libraryId,
    objectId,
    writeToken: editResponse.write_token,
    metadataSubtree: "public",
    metadata: {
      "image": uploadResponse.part.hash,
    }
  });

  await this.FinalizeContentObject({
    libraryId,
    objectId,
    writeToken: editResponse.write_token
  });
};

/**
 * Delete the specified content library
 *
 * @methodGroup Content Libraries
 *
 * @namedParams
 * @param {string} libraryId - ID of the library to delete
 */
exports.DeleteContentLibrary = async function({libraryId}) {
  ValidateLibrary(libraryId);

  let path = UrlJoin("qlibs", libraryId);

  const authorizationHeader = await this.authClient.AuthorizationHeader({libraryId, update: true});

  await this.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(libraryId),
    abi: LibraryContract.abi,
    methodName: "kill",
    methodArgs: []
  });

  await this.HttpClient.Request({
    headers: authorizationHeader,
    method: "DELETE",
    path: path
  });
};

/* Library Content Type Management */

/**
 * Add a specified content type to a library
 *
 * @methodGroup Content Libraries
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string=} typeId - ID of the content type
 * @param {string=} typeName - Name of the content type
 * @param {string=} typeHash - Version hash of the content type
 * @param {string=} customContractAddress - Address of the custom contract to associate with
 * this content type for this library
 *
 * @returns {Promise<string>} - Hash of the addContentType transaction
 */
exports.AddLibraryContentType = async function({libraryId, typeId, typeName, typeHash, customContractAddress}) {
  ValidateLibrary(libraryId);

  this.Log(`Adding library content type to ${libraryId}: ${typeId || typeHash || typeName}`);

  if(typeHash) { typeId = this.utils.DecodeVersionHash(typeHash).objectId; }

  if(!typeId) {
    // Look up type by name
    const type = await this.ContentType({name: typeName});
    typeId = type.id;
  }

  this.Log(`Type ID: ${typeId}`);

  const typeAddress = this.utils.HashToAddress(typeId);
  customContractAddress = customContractAddress || this.utils.nullAddress;

  const event = await this.ethClient.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(libraryId),
    abi: LibraryContract.abi,
    methodName: "addContentType",
    methodArgs: [typeAddress, customContractAddress],
    signer: this.signer
  });

  return event.transactionHash;
};

/**
 * Remove the specified content type from a library
 *
 * @methodGroup Content Libraries
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string=} typeId - ID of the content type (required unless typeName is specified)
 * @param {string=} typeName - Name of the content type (required unless typeId is specified)
 * @param {string=} typeHash - Version hash of the content type
 *
 * @returns {Promise<string>} - Hash of the removeContentType transaction
 */
exports.RemoveLibraryContentType = async function({libraryId, typeId, typeName, typeHash}) {
  ValidateLibrary(libraryId);

  this.Log(`Removing library content type from ${libraryId}: ${typeId || typeHash || typeName}`);

  if(typeHash) { typeId = this.utils.DecodeVersionHash(typeHash).objectId; }

  if(!typeId) {
    // Look up type by name
    const type = await this.ContentType({name: typeName});
    typeId = type.id;
  }

  this.Log(`Type ID: ${typeId}`);

  const typeAddress = this.utils.HashToAddress(typeId);

  const event = await this.ethClient.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(libraryId),
    abi: LibraryContract.abi,
    methodName: "removeContentType",
    methodArgs: [typeAddress],
    signer: this.signer
  });

  return event.transactionHash;
};


/* Content object creation, modification, deletion */

/**
 * Create a new content object draft.
 *
 * A new content object contract is deployed from
 * the content library, and that contract ID is used to determine the object ID to
 * create in the fabric.
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string=} objectId - ID of the object (if contract already exists)
 * @param {Object=} options -
 * type: Version hash of the content type to associate with the object
 *
 * meta: Metadata to use for the new object
 *
 * @returns {Promise<Object>} - Response containing the object ID and write token of the draft
 */
exports.CreateContentObject = async function({libraryId, objectId, options={}}) {
  ValidateLibrary(libraryId);
  if(objectId) { ValidateObject(objectId); }

  this.Log(`Creating content object: ${libraryId} ${objectId || ""}`);

  // Look up content type, if specified
  let typeId;
  if(options.type) {
    this.Log(`Type specified: ${options.type}`);

    let type = options.type;
    if(type.startsWith("hq__")) {
      type = await this.ContentType({versionHash: type});
    } else if(type.startsWith("iq__")) {
      type = await this.ContentType({typeId: type});
    } else {
      type = await this.ContentType({name: type});
    }

    if(!type) {
      throw Error(`Unable to find content type '${options.type}'`);
    }

    typeId = type.id;
    options.type = type.hash;
  }

  if(!objectId) {
    this.Log("Deploying contract...");
    const { contractAddress } = await this.authClient.CreateContentObject({libraryId, typeId});

    objectId = this.utils.AddressToObjectId(contractAddress);
    this.Log(`Contract deployed: ${contractAddress} ${objectId}`);
  } else {
    this.Log(`Contract already deployed for contract type: ${await this.AccessType({id: objectId})}`);
  }

  if(options.visibility) {
    this.Log(`Setting visibility to ${options.visibility}`);

    await this.CallContractMethod({
      abi: ContentContract.abi,
      contractAddress: this.utils.HashToAddress(objectId),
      methodName: "setVisibility",
      methodArgs: [options.visibility]
    });
  }

  const path = UrlJoin("qid", objectId);

  return await this.utils.ResponseToJson(
    this.HttpClient.Request({
      headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
      method: "POST",
      path: path,
      body: options,
      failover: false
    })
  );
};

/**
 * Create a new content object draft from an existing content object version.
 *
 * Note: The type of the new copy can be different from the original object.
 *
 * @see <a href="#CreateContentObject">CreateContentObject</a>
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library in which to create the new object
 * @param originalVersionHash - Version hash of the object to copy
 * @param {Object=} options -
 * type: Version hash of the content type to associate with the object - may be different from the original object
 *
 * meta: Metadata to use for the new object - This will be merged into the metadata of the original object
 *
 * @returns {Promise<Object>} - Response containing the object ID and write token of the draft
 */
exports.CopyContentObject = async function({libraryId, originalVersionHash, options={}}) {
  ValidateLibrary(libraryId);
  ValidateVersion(originalVersionHash);

  options.copy_from = originalVersionHash;

  return await this.CreateContentObject({libraryId, options});
};

/**
 * Create a new content object draft from an existing object.
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {object=} options -
 * meta: New metadata for the object - will be merged into existing metadata if specified
 * type: New type for the object - Object ID, version hash or name of type
 *
 * @returns {Promise<object>} - Response containing the object ID and write token of the draft
 */
exports.EditContentObject = async function({libraryId, objectId, options={}}) {
  ValidateParameters({libraryId, objectId});

  this.Log(`Opening content draft: ${libraryId} ${objectId}`);

  if(options.type) {
    if(options.type.startsWith("hq__")) {
      // Type hash specified
      options.type = (await this.ContentType({versionHash: options.type})).hash;
    } else if(options.type.startsWith("iq__")) {
      // Type ID specified
      options.type = (await this.ContentType({typeId: options.type})).hash;
    } else {
      // Type name specified
      options.type = (await this.ContentType({name: options.type})).hash;
    }
  }

  let path = UrlJoin("qid", objectId);

  return this.utils.ResponseToJson(
    this.HttpClient.Request({
      headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
      method: "POST",
      path: path,
      body: options,
      failover: false
    })
  );
};

/**
 * Finalize content draft
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} writeToken - Write token of the draft
 * @param {boolean=} publish=true - If specified, the object will also be published
 * @param {boolean=} awaitCommitConfirmation=true - If specified, will wait for the publish commit to be confirmed.
 * Irrelevant if not publishing.
 */
exports.FinalizeContentObject = async function({libraryId, objectId, writeToken, publish=true, awaitCommitConfirmation=true}) {
  ValidateParameters({libraryId, objectId});
  ValidateWriteToken(writeToken);

  this.Log(`Finalizing content draft: ${libraryId} ${objectId} ${writeToken}`);

  let path = UrlJoin("q", writeToken);

  const finalizeResponse = await this.utils.ResponseToJson(
    this.HttpClient.Request({
      headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
      method: "POST",
      path: path,
      failover: false
    })
  );

  this.Log(`Finalized: ${finalizeResponse.hash}`);

  if(publish) {
    await this.PublishContentVersion({
      objectId,
      versionHash: finalizeResponse.hash,
      awaitCommitConfirmation
    });
  }

  // Invalidate cached content type, if this is one.
  delete this.contentTypes[objectId];

  return finalizeResponse;
};

/**
 * Publish a previously finalized content object version
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} versionHash - The version hash of the content object to publish
 * @param {boolean=} awaitCommitConfirmation=true - If specified, will wait for the publish commit to be confirmed.
 */
exports.PublishContentVersion = async function({objectId, versionHash, awaitCommitConfirmation=true}) {
  versionHash ? ValidateVersion(versionHash) : ValidateObject(objectId);

  this.Log(`Publishing: ${objectId || versionHash}`);

  if(versionHash) { objectId = this.utils.DecodeVersionHash(versionHash).objectId; }

  await this.ethClient.CommitContent({
    contentObjectAddress: this.utils.HashToAddress(objectId),
    versionHash,
    signer: this.signer
  });

  if(awaitCommitConfirmation) {
    this.Log("Awaiting commit confirmation...");

    await this.ethClient.AwaitEvent({
      contractAddress: this.utils.HashToAddress(objectId),
      abi: ContentContract.abi,
      eventName: "VersionConfirm",
      signer: this.signer
    });
  }
};

/**
 * Delete specified version of the content object
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string=} versionHash - Hash of the object version - if not specified, most recent version will be deleted
 */
exports.DeleteContentVersion = async function({versionHash}) {
  ValidateVersion(versionHash);

  this.Log(`Deleting content version: ${versionHash}`);

  const { objectId } = this.utils.DecodeVersionHash(versionHash);

  await this.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(objectId),
    abi: ContentContract.abi,
    methodName: "deleteVersion",
    methodArgs: [versionHash]
  });
};

/**
 * Delete specified content object
 *
 * @methodGroup Content Objects
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 */
exports.DeleteContentObject = async function({libraryId, objectId}) {
  ValidateParameters({libraryId, objectId});

  this.Log(`Deleting content version: ${libraryId} ${objectId}`);

  await this.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(libraryId),
    abi: LibraryContract.abi,
    methodName: "deleteContent",
    methodArgs: [this.utils.HashToAddress(objectId)]
  });
};

/* Content object metadata */

/**
 * Merge specified metadata into existing content object metadata
 *
 * @methodGroup Metadata
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} writeToken - Write token of the draft
 * @param {Object} metadata - New metadata to merge
 * @param {string=} metadataSubtree - Subtree of the object metadata to modify
 */
exports.MergeMetadata = async function({libraryId, objectId, writeToken, metadataSubtree="/", metadata={}}) {
  ValidateParameters({libraryId, objectId});
  ValidateWriteToken(writeToken);

  this.Log(
    `Merging metadata: ${libraryId} ${objectId} ${writeToken}
      Subtree: ${metadataSubtree}`
  );
  this.Log(metadata);

  let path = UrlJoin("q", writeToken, "meta", metadataSubtree);

  await this.HttpClient.Request({
    headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
    method: "POST",
    path: path,
    body: metadata,
    failover: false
  });
};

/**
 * Replace content object metadata with specified metadata
 *
 * @methodGroup Metadata
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} writeToken - Write token of the draft
 * @param {Object} metadata - New metadata to merge
 * @param {string=} metadataSubtree - Subtree of the object metadata to modify
 */
exports.ReplaceMetadata = async function({libraryId, objectId, writeToken, metadataSubtree="/", metadata={}}) {
  ValidateParameters({libraryId, objectId});
  ValidateWriteToken(writeToken);

  this.Log(
    `Replacing metadata: ${libraryId} ${objectId} ${writeToken}
      Subtree: ${metadataSubtree}`
  );
  this.Log(metadata);

  let path = UrlJoin("q", writeToken, "meta", metadataSubtree);

  await this.HttpClient.Request({
    headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
    method: "PUT",
    path: path,
    body: metadata,
    failover: false
  });
};

/**
 * Delete content object metadata of specified subtree
 *
 * @methodGroup Metadata
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} writeToken - Write token of the draft
 * @param {string=} metadataSubtree - Subtree of the object metadata to modify
 * - if not specified, all metadata will be deleted
 */
exports.DeleteMetadata = async function({libraryId, objectId, writeToken, metadataSubtree="/"}) {
  ValidateParameters({libraryId, objectId});
  ValidateWriteToken(writeToken);

  this.Log(
    `Deleting metadata: ${libraryId} ${objectId} ${writeToken}
      Subtree: ${metadataSubtree}`
  );
  this.Log(`Subtree: ${metadataSubtree}`);

  let path = UrlJoin("q", writeToken, "meta", metadataSubtree);

  await this.HttpClient.Request({
    headers: await this.authClient.AuthorizationHeader({libraryId, objectId, update: true}),
    method: "DELETE",
    path: path,
    failover: false
  });
};

/**
 * Set the access charge for the specified object
 *
 * @methodGroup Access Requests
 * @namedParams
 * @param {string} objectId - ID of the object
 * @param {number | string} accessCharge - The new access charge, in ether
 */
exports.SetAccessCharge = async function({objectId, accessCharge}) {
  ValidateObject(objectId);

  this.Log(`Setting access charge: ${objectId} ${accessCharge}`);

  await this.ethClient.CallContractMethodAndWait({
    contractAddress: this.utils.HashToAddress(objectId),
    abi: ContentContract.abi,
    methodName: "setAccessCharge",
    methodArgs: [this.utils.EtherToWei(accessCharge).toString()],
    signer: this.signer
  });
};

/**
 * Recursively update all auto_update links in the specified object.
 *
 * Note: Links will not be updated unless they are specifically marked as auto_update
 *
 * @methodGroup Links
 * @param {string=} libraryId - ID of the library
 * @param {string=} objectId - ID of the object
 * @param {string=} versionHash - Version hash of the object -- if not specified, latest version is returned
 * @param {function=} callback - If specified, the callback will be called each time an object is updated with
 * current progress as well as information about the last update (action)
 * - Format: {completed: number, total: number, action: string}
 */
exports.UpdateContentObjectGraph = async function({libraryId, objectId, versionHash, callback}) {
  ValidateParameters({libraryId, objectId, versionHash});

  this.Log(`Updating content object graph: ${libraryId || ""} ${objectId || versionHash}`);

  if(versionHash) { objectId = this.utils.DecodeVersionHash(versionHash).objectId; }

  let total;
  let completed = 0;

  // eslint-disable-next-line no-constant-condition
  while(1) {
    const graph = await this.ContentObjectGraph({
      libraryId,
      objectId,
      versionHash,
      autoUpdate: true,
      select: ["name", "public/name", "public/asset_metadata/display_title"]
    });

    if(Object.keys(graph.auto_updates).length === 0) {
      this.Log("No more updates required");
      return;
    }

    if(!total) {
      total = graph.auto_updates.order.length;
    }

    const currentHash = graph.auto_updates.order[0];
    const links = graph.auto_updates.links[currentHash];

    const details = graph.details[currentHash].meta || {};
    const name = (details.public && details.public.asset_metadata && details.public.asset_metadata.display_title) ||
      (details.public && details.public.name) || details.name || versionHash || objectId;

    const currentLibraryId = await this.ContentObjectLibraryId({versionHash: currentHash});
    const currentObjectId = (this.utils.DecodeVersionHash(currentHash)).objectId;

    if(callback) {
      callback({
        completed,
        total,
        action: `Updating ${name} (${currentObjectId})...`
      });
    }

    this.Log(`Updating links for ${name} (${currentObjectId} / ${currentHash})`);

    const {write_token} = await this.EditContentObject({
      libraryId: currentLibraryId,
      objectId: currentObjectId
    });

    await Promise.all(
      links.map(async ({path, updated}) => {
        await this.ReplaceMetadata({
          libraryId: currentLibraryId,
          objectId: currentObjectId,
          writeToken: write_token,
          metadataSubtree: path,
          metadata: updated
        });
      })
    );

    const { hash } = await this.FinalizeContentObject({
      libraryId: currentLibraryId,
      objectId: currentObjectId,
      writeToken: write_token
    });

    // If root object was specified by hash and updated, update hash
    if(currentHash === versionHash) {
      versionHash = hash;
    }

    completed += 1;
  }
};

/**
 * Create links to files, metadata and/or representations of this or or other
 * content objects.
 *
 * Expected format of links:
 *

 [
    {
      path: string (metadata path for the link)
      target: string (path to link target),
      type: string ("file", "meta" | "metadata", "rep" - default "metadata")
      targetHash: string (optional, for cross-object links),
      autoUpdate: boolean (if specified, link will be automatically updated to latest version by UpdateContentObjectGraph method)
    }
 ]

 * @methodGroup Links
 * @namedParams
 * @param {string} libraryId - ID of the library
 * @param {string} objectId - ID of the object
 * @param {string} writeToken - Write token of the draft
 * @param {Array<Object>} links - Link specifications
 */
exports.CreateLinks = async function({
  libraryId,
  objectId,
  writeToken,
  links=[]
}) {
  ValidateParameters({libraryId, objectId});
  ValidateWriteToken(writeToken);

  for(let i = 0; i < links.length; i++) {
    const info = links[i];
    const path = info.path.replace(/^(\/|\.)+/, "");

    let type = (info.type || "file") === "file" ? "files" : info.type;
    if(type === "metadata") { type = "meta"; }

    let target = info.target.replace(/^(\/|\.)+/, "");
    if(info.targetHash) {
      target = `/qfab/${info.targetHash}/${type}/${target}`;
    } else {
      target = `./${type}/${target}`;
    }

    let link = {
      "/": target
    };

    if(info.autoUpdate) {
      link["."] = { auto_update: { tag: "latest"} };
    }

    await this.ReplaceMetadata({
      libraryId,
      objectId,
      writeToken,
      metadataSubtree: path,
      metadata: link
    });
  }
};
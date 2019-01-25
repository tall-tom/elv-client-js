const Ethers = require("ethers");
const Utils = require("./Utils");

// -- Contract javascript files built using build/BuildContracts.js
const SpaceContract = require("./contracts/BaseContentSpace");
const LibraryContract = require("./contracts/BaseLibrary");
const TypeContract = require("./contracts/BaseContentType");
const ContentContract = require("./contracts/BaseContent");

// Node doesn't implement btoa
const B64 = (str) => {
  if(typeof btoa !== "undefined") {
    return btoa(str);
  }

  return Buffer.from(str).toString("base64");
};

class AuthorizationClient {
  constructor({ethClient, contentSpaceId, signer, noCache=false, noAuth=false}) {
    this.ethClient = ethClient;
    this.contentSpaceId = contentSpaceId;
    this.signer = signer;

    this.noCache = noCache;
    this.noAuth = noAuth;

    this.accessTransactions = {
      spaces: {},
      libraries: {},
      objects: {}
    };

    this.modifyTransactions = {
      spaces: {},
      libraries: {},
      objects: {}
    };

    this.requestIds = {};
  }

  async AuthorizationHeader({libraryId, objectId, transactionHash, update=false, noCache=false}) {
    const authorizationToken = await this.AuthorizationToken({libraryId, objectId, transactionHash, update, noCache});

    return { Authorization: "Bearer " + authorizationToken };
  }

  // Wrapper for GenerateAuthorizationHeader to allow for per-call disabling of cache
  async AuthorizationToken({libraryId, objectId, transactionHash, update=false, noCache=false}) {
    const initialNoCache = this.noCache;

    try {
      // noCache enabled for this call
      if (noCache && !this.noCache) {
        this.noCache = true;
      }

      const authorizationToken = await this.GenerateAuthorizationToken({libraryId, objectId, transactionHash, update});

      this.noCache = initialNoCache;

      return authorizationToken;
    } catch(error) {
      // Ensure nocache is properly reset
      this.noCache = initialNoCache;
      throw error;
    }
  }

  async IsOwner({id, abi}) {
    const ownerAddress = await this.ethClient.CallContractMethod({
      contractAddress: Utils.HashToAddress({hash: id}),
      abi,
      methodName: "owner",
      methodArgs: [],
      signer: this.signer
    });

    return ownerAddress.toLowerCase() === this.signer.address.toLowerCase();
  }

  async GetAccessCharge({id, abi}) {
    // Ensure contract has a getAccessCharge method
    const method = abi.find(element => element.name === "getAccessCharge" && element.type === "function");

    if(!method) { return 0; }

    const event = await this.ethClient.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress({hash: id}),
      abi,
      methodName: "getAccessCharge",
      methodArgs: [0, [], []],
      signer: this.signer
    });

    const eventLog = this.ethClient.ExtractEventFromLogs({
      abi: ContentContract.abi,
      event,
      eventName: "GetAccessCharge"
    });

    return eventLog.values.accessCharge;
  }

  // Generate proper authorization header based on the information provided
  async GenerateAuthorizationToken({libraryId, objectId, transactionHash, update=false}) {
    if(!transactionHash && !this.noAuth) {
      // If content library object, authorize against library, not object
      if(objectId && !Utils.EqualHash(libraryId, objectId)) {
        if(Utils.EqualHash(this.contentSpaceId, libraryId)) {
          // Content type
          if(update) {
            transactionHash = await this.ContentTypeUpdate({objectId});
          } else {
            transactionHash = await this.ContentTypeAccess({objectId});
          }
        } else {
          // Content object
          if(update) {
            transactionHash = await this.ContentObjectUpdate({objectId});
          } else {
            transactionHash = await this.ContentObjectAccess({objectId});
          }
        }
        // If content space library, authorize against space, not library
      } else if(libraryId && !Utils.EqualHash(this.contentSpaceId, libraryId)) {
        // Content Library
        if(update) {
          transactionHash = await this.ContentLibraryUpdate({libraryId});
        } else {
          //transactionHash = await this.ContentLibraryAccess({libraryId});
        }
      } else {
        // Content space
        //transactionHash = await this.ContentSpaceAccess();
      }
    }

    const token = B64(JSON.stringify({
      qspace_id: this.contentSpaceId,
      qlib_id: libraryId,
      addr: this.signer.signingKey.address,
      txid: transactionHash
    }));

    const signature = B64("SIGNATURE");

    return token + "." + signature;
  }

  CacheLibraryTransaction({libraryId, transactionHash}) {
    this.modifyTransactions.libraries[libraryId] = transactionHash;
  }

  CacheObjectTransaction({objectId, transactionHash}) {
    this.modifyTransactions.objects[objectId] = transactionHash;
  }

  /* Access */

  async AccessComplete({id, abi, score}) {
    const requestId = this.requestIds[id];

    if(!requestId) { throw Error("Unknown request for " + id); }

    const formattedArgs = this.ethClient.FormatContractArguments({
      abi,
      methodName: "accessComplete",
      args: [requestId, score, ""],
      signer: this.signer
    });

    // If access request did not succeed, no event will be emitted
    const event = await this.ethClient.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress({hash: id}),
      abi,
      methodName: "accessComplete",
      methodArgs: formattedArgs,
      signer: this.signer
    });

    delete this.requestIds[id];
    delete this.accessTransactions[id];

    return event;
  }

  async AccessRequest({id, abi, args=[], checkAccessCharge=false, accessCache={}, modifyCache={}}) {
    // See if access or modification request has already been made
    if(!this.noCache) {
      let transactionHash = accessCache[id] || modifyCache[id];
      if(transactionHash) { return transactionHash; }
    }

    const isOwner = await this.IsOwner({id, abi});

    // Send some bux if access charge is required
    let accessCharge = 0;
    if(!isOwner && checkAccessCharge) {
      accessCharge = await this.GetAccessCharge({id, abi});
      accessCharge = Ethers.utils.parseEther(accessCharge.toString());
    }

    const formattedArgs = this.ethClient.FormatContractArguments({
      abi,
      methodName: "accessRequest",
      args,
      signer: this.signer
    });

    // If access request did not succeed, no event will be emitted
    const event = await this.ethClient.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress({hash: id}),
      abi,
      methodName: "accessRequest",
      methodArgs: formattedArgs,
      value: accessCharge,
      signer: this.signer
    });

    const accessRequestEvent = this.ethClient.ExtractEventFromLogs({
      abi,
      event,
      eventName: "AccessRequest"
    });

    if(event.logs.length === 0 || !accessRequestEvent) {
      throw Error("Access denied");
    }

    // Cache the transaction hash
    if(!this.noCache) {
      accessCache[id] = event.transactionHash;

      // Save request ID if present
      if(event.logs.length > 0 && event.logs[0].values) {
        this.requestIds[id] = event.logs[0].values.requestID;
      }
    }

    return event.transactionHash;
  }

  ContentSpaceAccess() {
    return this.AccessRequest({
      id: this.contentSpaceId,
      abi: SpaceContract.abi,
      args: [],
      accessCache: this.accessTransactions.spaces,
      modifyCache: this.modifyTransactions.spaces
    });
  }

  ContentLibraryAccess({libraryId}) {
    return this.AccessRequest({
      id: libraryId,
      abi: LibraryContract.abi,
      args: [],
      accessCache: this.accessTransactions.libraries,
      modifyCache: this.modifyTransactions.libraries
    });
  }

  ContentTypeAccess({objectId}) {
    return this.AccessRequest({
      id: objectId,
      abi: TypeContract.abi,
      args: [],
      accessCache: this.accessTransactions.libraries,
      modifyCache: this.modifyTransactions.libraries
    });
  }

  ContentObjectAccess({objectId}) {
    const args = [
      0, // Access level
      this.signer.signingKey.publicKey, // Public key of requester
      "", // AFGH string
      [], // Custom values
      [] // Stakeholders
    ];

    return this.AccessRequest({
      id: objectId,
      abi: ContentContract.abi,
      args,
      checkAccessCharge: true,
      accessCache: this.accessTransactions.objects,
      modifyCache: this.modifyTransactions.objects
    });
  }

  /* Create */

  async CreateAccessGroup() {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.ethClient.DeployAccessGroupContract({
      contentSpaceAddress: Utils.HashToAddress({hash: this.contentSpaceId}),
      signer: this.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentType() {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.ethClient.DeployTypeContract({
      contentSpaceAddress: Utils.HashToAddress({hash: this.contentSpaceId}),
      signer: this.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentLibrary() {
    // Deploy contract
    const {contractAddress, transactionHash} = await this.ethClient.DeployLibraryContract({
      contentSpaceAddress: Utils.HashToAddress({hash: this.contentSpaceId}),
      signer: this.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  async CreateContentObject({libraryId, typeId}) {
    // Deploy contract
    const { contractAddress, transactionHash } = await this.ethClient.DeployContentContract({
      contentLibraryAddress: Utils.HashToAddress({hash: libraryId}),
      typeAddress: typeId ? Utils.HashToAddress({hash: typeId}) : Utils.nullAddress,
      signer: this.signer
    });

    return {
      contractAddress,
      transactionHash
    };
  }

  /* Update */

  async UpdateRequest({id, abi, cache={}}) {
    // See if create or modification request has already been made
    if(!this.noCache && cache) {
      let transactionHash = cache[id];
      if(transactionHash) { return transactionHash; }
    }

    const methodEvent = await this.ethClient.CallContractMethodAndWait({
      contractAddress: Utils.HashToAddress({hash: id}),
      abi,
      methodName: "updateRequest",
      methodArgs: [],
      signer: this.signer
    });

    // Cache the transaction hash
    if(!this.noCache && cache) {
      cache[id] = methodEvent.transactionHash;
    }

    return methodEvent.transactionHash;
  }

  async ContentLibraryUpdate({libraryId}) {
    return this.UpdateRequest({
      id: libraryId,
      abi: LibraryContract.abi,
      cache: this.modifyTransactions.libraries
    });
  }

  async ContentTypeUpdate({objectId}) {
    return this.UpdateRequest({
      id: objectId,
      abi: TypeContract.abi,
      cache: this.modifyTransactions.objects
    });
  }

  async ContentObjectUpdate({objectId}) {
    return this.UpdateRequest({
      id: objectId,
      abi: ContentContract.abi,
      cache: this.modifyTransactions.objects
    });
  }

  // Clear cached access transaction IDs for either a specific library/object or all
  ClearCache({libraryId, objectId}) {
    if(libraryId) {
      this.accessTransactions.libraries[libraryId] = undefined;
      this.modifyTransactions.libraries[libraryId] = undefined;
    } else if(objectId) {
      this.accessTransactions.objects[objectId] = undefined;
      this.modifyTransactions.objects[objectId] = undefined;
    } else {
      this.accessTransactions = {};
      this.modifyTransactions = {};
    }
  }
}

module.exports = AuthorizationClient;

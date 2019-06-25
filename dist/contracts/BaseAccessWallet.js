"use strict";

var contract = {
  "abi": [{
    "constant": false,
    "inputs": [],
    "name": "parentAddress",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "creator",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentObjects",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusNonceFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "name": "setContentSpace",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusSendFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContractRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_OBJECT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "",
      "type": "bytes"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "pke_requestor",
      "type": "string"
    }, {
      "name": "pke_AFGH",
      "type": "string"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stakeholders",
      "type": "address[]"
    }],
    "name": "contentAccessRequest",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getAccessGroupsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canContribute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }, {
      "name": "content_contract",
      "type": "address"
    }],
    "name": "addContentType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_GROUP",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canConfirm",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_LIBRARY",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_CONFIRMED",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "contentTypeContracts",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "currentTimestamp",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "typeHash",
      "type": "bytes32"
    }],
    "name": "findTypeByHash",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContractRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "canNodePublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "canReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "validType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "contentObj",
      "type": "address"
    }],
    "name": "publish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getAccessGroup",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAll",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }, {
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "group",
      "type": "address"
    }],
    "name": "getAccessGroupRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "accessGroups",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "addressKMS",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "countVersionHashes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "",
      "type": "bytes"
    }, {
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }, {
      "name": "ml_out_hash",
      "type": "bytes32"
    }],
    "name": "contentAccessComplete",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "requiresReview",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentObjectRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "candidate",
      "type": "address"
    }],
    "name": "hasManagerAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "confirmCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_TENTATIVE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_guarantor",
      "type": "address"
    }, {
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "execute",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_EDIT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTRACT",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkLibraryRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "CATEGORY_CONTENT_TYPE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentObjectRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contracts",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newCreator",
      "type": "address"
    }],
    "name": "transferCreatorship",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "canCommit",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContract",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_v",
      "type": "uint8"
    }, {
      "name": "_r",
      "type": "bytes32"
    }, {
      "name": "_s",
      "type": "bytes32"
    }, {
      "name": "_dest",
      "type": "address"
    }, {
      "name": "_value",
      "type": "uint256"
    }, {
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTransaction",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "addr",
      "type": "address"
    }],
    "name": "contractExists",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "versionHashes",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setLibraryRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "ACCESS_NONE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpContentTypes",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setContentTypeRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpLibraries",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusBalanceFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "level",
      "type": "uint8"
    }, {
      "name": "pke_requestor",
      "type": "string"
    }, {
      "name": "pke_AFGH",
      "type": "string"
    }, {
      "name": "custom_values",
      "type": "bytes32[]"
    }, {
      "name": "stakeholders",
      "type": "address[]"
    }],
    "name": "accessRequestMsg",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "address"
    }],
    "name": "hasAccess",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusOk",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_SEE",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_address",
      "type": "address"
    }, {
      "name": "request_ID",
      "type": "uint256"
    }, {
      "name": "score_pct",
      "type": "uint256"
    }, {
      "name": "ml_out_hash",
      "type": "bytes32"
    }],
    "name": "accessCompleteMsg",
    "outputs": [{
      "name": "",
      "type": "bytes32"
    }],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "_objectHash",
      "type": "string"
    }],
    "name": "commit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "",
      "type": "uint256"
    }],
    "name": "contentTypes",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_candidate",
      "type": "address"
    }],
    "name": "canPublish",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "whitelistedType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypes",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "index_type",
      "type": "uint8"
    }, {
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkDirectRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }],
    "name": "getContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContractRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentObjects",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentType",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentSpace",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "updateRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "libraries",
    "outputs": [{
      "name": "category",
      "type": "uint8"
    }, {
      "name": "length",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "contentTypesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "address_KMS",
      "type": "address"
    }],
    "name": "setAddressKMS",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getLibrariesLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getContentObject",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "position",
      "type": "uint256"
    }],
    "name": "getLibrary",
    "outputs": [{
      "name": "",
      "type": "address"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "TYPE_ACCESS",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "cleanUpAccessGroups",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "objectHash",
    "outputs": [{
      "name": "",
      "type": "string"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "execStatusSigFail",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContentObjectsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [],
    "name": "accessRequest",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "group",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setAccessGroupRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "_ts",
      "type": "uint256"
    }],
    "name": "validateTimestamp",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "lib",
      "type": "address"
    }],
    "name": "getLibraryRights",
    "outputs": [{
      "name": "",
      "type": "uint8"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [],
    "name": "getContractsLength",
    "outputs": [{
      "name": "",
      "type": "uint256"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{
      "name": "content_type",
      "type": "address"
    }],
    "name": "removeContentType",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true,
    "inputs": [{
      "name": "obj",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }],
    "name": "checkContentTypeRights",
    "outputs": [{
      "name": "",
      "type": "bool"
    }],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }, {
    "inputs": [{
      "name": "content_space",
      "type": "address"
    }],
    "payable": true,
    "stateMutability": "payable",
    "type": "constructor"
  }, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "guarantor",
      "type": "address"
    }, {
      "indexed": false,
      "name": "code",
      "type": "int256"
    }],
    "name": "ExecStatus",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "principal",
      "type": "address"
    }, {
      "indexed": false,
      "name": "entity",
      "type": "address"
    }, {
      "indexed": false,
      "name": "aggregate",
      "type": "uint8"
    }],
    "name": "RightsChanged",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "label",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "uint256"
    }, {
      "indexed": false,
      "name": "a",
      "type": "address"
    }],
    "name": "dbgAddress",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }, {
      "indexed": false,
      "name": "contentContract",
      "type": "address"
    }],
    "name": "ContentTypeAdded",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "contentType",
      "type": "address"
    }],
    "name": "ContentTypeRemoved",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "parentAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "CommitPending",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "UpdateRequest",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "7f41636365737369626c6532303139303232323133353930304d4c00000000000060009081557f4f776e61626c6532303139303532383139333830304d4c00000000000000000060019081557f4564697461626c653230313930363037313035363030504f00000000000000006005557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600955600c919091557f416363657373496e6465786f7232303139303532383139343230304d4c000000600e55600f805460ff1916821761ff0019166102001762ff00001916620300001763ff000000191663040000001764ff00000000191664050000000017905560e06040526080908152600a60a052606460c0526200011d906010906003620001f9565b507f4261736541636365737357616c6c65743230313930363131313230303030504f6025556040516020806200406583398101604052516002805432600160a060020a03199182168117909255600380548216909217909155600f546011805462010000830460ff90811660ff1992831617909255601980546101008504841690831617905560158054838516908316179055601d805463010000008504841690831617905560218054640100000000909404909216921691909117905560048054909116600160a060020a03909216919091179055620002b7565b600183019183908215620002815791602002820160005b838211156200025057835183826101000a81548160ff021916908360ff160217905550926020019260010160208160000104928301926001030262000210565b80156200027f5782816101000a81549060ff021916905560010160208160000104928301926001030262000250565b505b506200028f92915062000293565b5090565b620002b491905b808211156200028f57805460ff191681556001016200029a565b90565b613d9e80620002c76000396000f3006080604052600436106104515763ffffffff60e060020a600035041662821de3811461045357806302d05d3f14610484578063048bd5291461049957806304f55daf146104c0578063055af48f146104d557806307a08237146104f657806308d865d71461050b578063091600e6146105425780630add6d2a146105575780630dc10d3f146106b55780630eaec2c5146106ca5780630f58a786146106ff57806312915a301461072657806314cfabb31461073b57806315c0bac11461075057806316aed23214610777578063186897331461078c5780631cdbee5a146107a15780631e2ff94f146107c25780631f2caaec146107d7578063224dcba0146107ef57806326683e141461081c57806329d002191461083d57806329dedde51461085e5780632cf994221461087f5780632d474cbd146108a05780632fa5c842146108b8578063304f4a7b146108f857806330e669491461091957806332eaf21b1461094b578063331b86c0146109605780633abaae55146109755780633dd71d99146109dc5780633def5140146109f157806341c0e1b514610a1e57806342e7ba7b14610a33578063446e882614610a54578063479a0c5114610a5c578063508ad27814610a7157806354fd4d5014610aad5780635c1d305914610ac25780635d97b6c21461078c5780635faecb7614610ad75780636373a41114610afe5780636813b6d114610b1357806368a0469a14610b3a57806369881c0c14610b4f5780636c0f79b614610b705780636d2e4b1b14610b855780636e37542714610ba65780636ebc8c8614610bbb578063763d5ee614610bd35780637709bc7814610c065780637ca8f61814610c275780637cbb7bf214610cb45780637fb52f1a14610ce15780638232f3f114610d0f57806385e0a20014610d245780638635adb514610d395780638da5cb5b14610d6657806392297d7b14610d7b5780639476c47814610d90578063957a3aa414610da557806395a078e814610ec157806395ba60ba14610ee257806396eba03d14610d0f5780639751067114610ef75780639867db7414610f21578063991a3a7c14610f7a5780639b55f901146106ca5780639cb121ba14610f925780639f46133e14610fb3578063a00b38c414610fc8578063a4081d6214610ff6578063a864dfa514611017578063a980892d1461103e578063aa3f695214611053578063af570c041461106b578063c287e0ed14611080578063c4b1978d14611095578063c65bcbe2146110aa578063c9e8e72d146110bf578063cb86806d146110e0578063cf8a7503146110f5578063d15d62a71461110d578063d1aeb65114610a5c578063d30f8cd014611125578063e02dd9c21461113a578063eb23b7aa1461114f578063ebe9314e14611164578063f155188714611179578063f17bda911461118e578063f2fde38b146111bb578063f50b2efe146111dc578063fb52222c146111f4578063fccc134f14611215578063fd0891961461122a578063fe538c5a1461124b575b005b34801561045f57600080fd5b50610468611272565b60408051600160a060020a039092168252519081900360200190f35b34801561049057600080fd5b50610468611282565b3480156104a557600080fd5b506104ae611291565b60408051918252519081900360200190f35b3480156104cc57600080fd5b506104ae6112a2565b3480156104e157600080fd5b50610451600160a060020a03600435166112a7565b34801561050257600080fd5b506104ae6112f7565b34801561051757600080fd5b5061052c600160a060020a03600435166112fc565b6040805160ff9092168252519081900360200190f35b34801561054e57600080fd5b5061052c61131e565b34801561056357600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526104ae958335600160a060020a031695369560449491939091019190819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989b60ff8b35169b909a90999401975091955091820193509150819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506113279650505050505050565b3480156106c157600080fd5b506104ae611652565b3480156106d657600080fd5b506106eb600160a060020a0360043516611658565b604080519115158252519081900360200190f35b34801561070b57600080fd5b50610451600160a060020a0360043581169060243516611687565b34801561073257600080fd5b5061052c6117fc565b34801561074757600080fd5b506106eb61180a565b34801561075c57600080fd5b506106eb600160a060020a036004351660ff60243516611815565b34801561078357600080fd5b5061052c611835565b34801561079857600080fd5b5061052c611844565b3480156107ad57600080fd5b50610468600160a060020a0360043516611849565b3480156107ce57600080fd5b506104ae611864565b3480156107e357600080fd5b5061046860043561186a565b3480156107fb57600080fd5b50610451600160a060020a036004351660ff60243581169060443516611aee565b34801561082857600080fd5b506106eb600160a060020a0360043516611b00565b34801561084957600080fd5b506106eb600160a060020a0360043516611ba1565b34801561086a57600080fd5b506106eb600160a060020a0360043516611ba7565b34801561088b57600080fd5b506106eb600160a060020a0360043516611bc5565b3480156108ac57600080fd5b50610468600435611ce5565b3480156108c457600080fd5b506108cd611d12565b6040805195865260208601949094528484019290925260608401526080830152519081900360a00190f35b34801561090457600080fd5b5061052c600160a060020a0360043516611d5d565b34801561092557600080fd5b5061092e611d7b565b6040805160ff909316835260208301919091528051918290030190f35b34801561095757600080fd5b50610468611d8a565b34801561096c57600080fd5b506104ae611d99565b60408051602060046024803582810135601f81018590048502860185019096528585526106eb958335600160a060020a031695369560449491939091019190819084018382808284375094975050843595505050602083013592604001359150611d9f9050565b3480156109e857600080fd5b506106eb611e4a565b3480156109fd57600080fd5b50610451600160a060020a036004351660ff60243581169060443516611e4f565b348015610a2a57600080fd5b50610451611e5c565b348015610a3f57600080fd5b506106eb600160a060020a0360043516611e98565b6106eb611eac565b348015610a6857600080fd5b5061052c6112a2565b348015610a7d57600080fd5b506106eb600160a060020a0360043581169060ff602435169060443590606435906084351660a43560c43561202d565b348015610ab957600080fd5b506104ae612304565b348015610ace57600080fd5b506104ae61230a565b348015610ae357600080fd5b506106eb600160a060020a036004351660ff60243516612310565b348015610b0a57600080fd5b5061052c612324565b348015610b1f57600080fd5b506106eb600160a060020a036004351660ff60243516612335565b348015610b4657600080fd5b5061052c61234f565b348015610b5b57600080fd5b5061052c600160a060020a036004351661235f565b348015610b7c57600080fd5b5061092e61237d565b348015610b9157600080fd5b50610451600160a060020a036004351661238c565b348015610bb257600080fd5b506106eb6123da565b348015610bc757600080fd5b506104686004356123eb565b348015610bdf57600080fd5b506106eb60ff60043516602435604435600160a060020a036064351660843560a4356123fd565b348015610c1257600080fd5b506106eb600160a060020a0360043516612566565b348015610c3357600080fd5b50610c3f60043561256e565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610c79578181015183820152602001610c61565b50505050905090810190601f168015610ca65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610cc057600080fd5b50610451600160a060020a036004351660ff60243581169060443516612615565b348015610ced57600080fd5b506106eb60ff600435811690600160a060020a03602435169060443516612622565b348015610d1b57600080fd5b5061052c6127d9565b348015610d3057600080fd5b506104ae6127de565b348015610d4557600080fd5b50610451600160a060020a036004351660ff602435811690604435166127ea565b348015610d7257600080fd5b506104686127f7565b348015610d8757600080fd5b506104ae612806565b348015610d9c57600080fd5b506104ae611844565b348015610db157600080fd5b50604080516020600460443581810135601f81018490048402850184019095528484526104ae948235600160a060020a0316946024803560ff169536959460649492019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a999881019791965091820194509250829150840183828082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750506040805187358901803560208181028481018201909552818452989b9a9989019892975090820195509350839250850190849080828437509497506128129650505050505050565b348015610ecd57600080fd5b506106eb600160a060020a03600435166129e2565b348015610eee57600080fd5b506104ae6127d9565b348015610f0357600080fd5b506104ae600160a060020a03600435166024356044356064356129e8565b348015610f2d57600080fd5b506040805160206004803580820135601f8101849004840285018401909552848452610451943694929360249392840191908190840183828082843750949750612a9b9650505050505050565b348015610f8657600080fd5b50610468600435612bab565b348015610f9e57600080fd5b506106eb600160a060020a0360043516612bd3565b348015610fbf57600080fd5b5061092e612c2a565b348015610fd457600080fd5b506106eb60ff600435811690600160a060020a03602435169060443516612c39565b34801561100257600080fd5b5061052c600160a060020a0360043516612d95565b34801561102357600080fd5b506106eb600160a060020a036004351660ff60243516612db3565b34801561104a57600080fd5b5061092e612dcf565b34801561105f57600080fd5b50610468600435612dde565b34801561107757600080fd5b50610468612df0565b34801561108c57600080fd5b50610451612dff565b3480156110a157600080fd5b5061092e612ed5565b3480156110b657600080fd5b506104ae612ee4565b3480156110cb57600080fd5b50610451600160a060020a0360043516612eea565b3480156110ec57600080fd5b506104ae612f3a565b34801561110157600080fd5b50610468600435612f40565b34801561111957600080fd5b50610468600435612f52565b34801561113157600080fd5b506104ae612f64565b34801561114657600080fd5b50610c3f612f70565b34801561115b57600080fd5b506104ae612fcb565b34801561117057600080fd5b506104ae612fd0565b34801561118557600080fd5b506106eb612fd6565b34801561119a57600080fd5b50610451600160a060020a036004351660ff60243581169060443516613007565b3480156111c757600080fd5b50610451600160a060020a0360043516613014565b3480156111e857600080fd5b506106eb600435613079565b34801561120057600080fd5b5061052c600160a060020a0360043516613095565b34801561122157600080fd5b506104ae6130b3565b34801561123657600080fd5b506106eb600160a060020a03600435166130b9565b34801561125757600080fd5b506106eb600160a060020a036004351660ff6024351661325c565b600454600160a060020a03165b90565b600254600160a060020a031681565b600061129d6015613277565b905090565b600181565b600354600160a060020a03163214806112ca5750600354600160a060020a031633145b15156112d557600080fd5b60048054600160a060020a031916600160a060020a0392909216919091179055565b600481565b600160a060020a03811660009081526022602052604090205460ff165b919050565b600f5460ff1681565b6000806000806000808c945084600160a060020a03166338d0f5048c8a8a6040518463ffffffff1660e060020a028152600401808460ff1660ff1681526020018060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156113a757818101518382015260200161138f565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156113e65781810151838201526020016113ce565b5050505090500195505050505050606060405180830381600087803b15801561140e57600080fd5b505af1158015611422573d6000803e3d6000fd5b505050506040513d606081101561143857600080fd5b508051602082015160409092015195509350915060ff83161561145a57600080fd5b600160a060020a03851663a1ff106e60ff8416151561147a57600061147c565b855b8d8d8d8d8d6040518763ffffffff1660e060020a028152600401808660ff1660ff16815260200180602001806020018060200180602001858103855289818151815260200191508051906020019080838360005b838110156114e85781810151838201526020016114d0565b50505050905090810190601f1680156115155780820380516001836020036101000a031916815260200191505b5085810384528851815288516020918201918a019080838360005b83811015611548578181015183820152602001611530565b50505050905090810190601f1680156115755780820380516001836020036101000a031916815260200191505b508581038352875181528751602091820191808a01910280838360005b838110156115aa578181015183820152602001611592565b50505050905001858103825286818151815260200191508051906020019060200280838360005b838110156115e95781810151838201526020016115d1565b5050505090500199505050505050505050506020604051808303818588803b15801561161457600080fd5b505af1158015611628573d6000803e3d6000fd5b50505050506040513d602081101561163f57600080fd5b50519d9c50505050505050505050505050565b601c5490565b600354600090600160a060020a03838116911614806116815750600354600160a060020a031633145b92915050565b600354600160a060020a03163214806116aa5750600354600160a060020a031633145b15156116b557600080fd5b600160a060020a038083166000908152600d6020526040902054161580156116e357506116e182612bd3565b155b1561178f57600b54600c5410156117395781600b600c5481548110151561170657fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550611785565b600b80546001810182556000919091527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db9018054600160a060020a031916600160a060020a0384161790555b600c805460010190555b600160a060020a038281166000818152600d60209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600f54610100900460ff1681565b600061129d33611b00565b600f5460009061182e90610100900460ff168484612622565b9392505050565b600f5462010000900460ff1681565b600281565b600d60205260009081526040902054600160a060020a031681565b60265481565b600080805b600b54821015611ae257600b80548390811061188757fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b602083106118e85780518252601f1990920191602091820191016118c9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561195757600080fd5b505af115801561196b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561199457600080fd5b8101908080516401000000008111156119ac57600080fd5b820160208101848111156119bf57600080fd5b81516401000000008111828201871017156119d957600080fd5b50509291905050506040516020018082805190602001908083835b60208310611a135780518252601f1990920191602091820191016119f4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310611a765780518252601f199092019160209182019101611a57565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415611ad757600b805483908110611abb57fe5b600091825260209091200154600160a060020a03169250611ae7565b60019091019061186f565b600092505b5050919050565b611afb60218484846134dd565b505050565b60048054604080517f26683e14000000000000000000000000000000000000000000000000000000008152600160a060020a038581169482019490945290516000939092169182916326683e1491602480830192602092919082900301818887803b158015611b6e57600080fd5b505af1158015611b82573d6000803e3d6000fd5b505050506040513d6020811015611b9857600080fd5b50519392505050565b50600090565b6000600c5460001415611bbc57506001611319565b61168182612bd3565b60008033600160a060020a03841614611bdd57600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015611c2a57600080fd5b505af1158015611c3e573d6000803e3d6000fd5b505050506040513d6020811015611c5457600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b158015611cb157600080fd5b505af1158015611cc5573d6000803e3d6000fd5b505050506040513d6020811015611cdb57600080fd5b5051159392505050565b601b80546000919083908110611cf757fe5b600091825260209091200154600160a060020a031692915050565b6000806000806000611d246011613277565b611d2e6019613277565b611d386015613277565b611d42601d613277565b611d4c6021613277565b945094509450945094509091929394565b600160a060020a03166000908152601a602052604090205460ff1690565b601954601c5460ff9091169082565b600a54600160a060020a031681565b60075490565b604080517f5cc4aa9b00000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905290516000918791600160a060020a03831691635cc4aa9b91606480830192602092919082900301818887803b158015611e1357600080fd5b505af1158015611e27573d6000803e3d6000fd5b505050506040513d6020811015611e3d57600080fd5b5051979650505050505050565b600090565b611afb60158484846134dd565b600354600160a060020a0316321480611e7f5750600354600160a060020a031633145b1515611e8a57600080fd5b600354600160a060020a0316ff5b600354600160a060020a0390811691161490565b6000611eb661180a565b1515611ec157600080fd5b600060068054600181600116156101000203166002900490501115611f3a5760078054600181810180845560009390935260068054611f37937fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880192600261010091831615919091026000190190911604613c26565b50505b60088054611f5d9160069160026000196101006001841615020190911604613c26565b50604080516020810191829052600090819052611f7c91600891613cab565b5060408051602080825260068054600260001961010060018416150201909116049183018290527f5ae4ddb3009a8ccdedc04b2011fc66a472807bcdcff04af16286ddb27819ebe19390929182918201908490801561201c5780601f10611ff15761010080835404028352916020019161201c565b820191906000526020600020905b815481529060010190602001808311611fff57829003601f168201915b50509250505060405180910390a190565b600454600090600160a060020a03168180338314806120d95750604080517fd6be0f490000000000000000000000000000000000000000000000000000000081523360048201529051600091600160a060020a0386169163d6be0f499160248082019260209290919082900301818787803b1580156120ab57600080fd5b505af11580156120bf573d6000803e3d6000fd5b505050506040513d60208110156120d557600080fd5b5051115b15156120e457600080fd5b600083600160a060020a031663d6be0f498d6040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050602060405180830381600087803b15801561214157600080fd5b505af1158015612155573d6000803e3d6000fd5b505050506040513d602081101561216b57600080fd5b50511161217757600080fd5b60265485116121bb5760408051600160a060020a038d168152600160208201528151600080516020613d53833981519152929181900390910190a1600093506122f6565b30318611156121ff5760408051600160a060020a038d168152600260208201528151600080516020613d53833981519152929181900390910190a1600093506122f6565b61220d8a8a8a8a8a8a6123fd565b91508115156122515760408051600160a060020a038d168152600360208201528151600080516020613d53833981519152929181900390910190a1600093506122f6565b6026859055604051600160a060020a0388169087156108fc029088906000818181858888f1935050505090508015156122bf5760408051600160a060020a038d168152600460208201528151600080516020613d53833981519152929181900390910190a1600093506122f6565b60408051600160a060020a038d168152600060208201528151600080516020613d53833981519152929181900390910190a1600193505b505050979650505050505050565b60255481565b60205490565b600f5460009061182e9060ff168484612622565b600f54640100000000900460ff1681565b600f5460009061182e9062010000900460ff168484612622565b600f546301000000900460ff1681565b600160a060020a031660009081526016602052604090205460ff1690565b60215460245460ff9091169082565b600254600160a060020a031632146123a357600080fd5b600160a060020a03811615156123b857600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b600354600160a060020a0316321490565b602380546000919083908110611cf757fe5b604080516c01000000000000000000000000308102602080840191909152600160a060020a038716909102603483015260488201859052606880830185905283518084039091018152608890920192839052815160009384938493909282918401908083835b602083106124825780518252601f199092019160209182019101612463565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902091506001828a8a8a604051600081526020016040526040518085600019166000191681526020018460ff1660ff1681526020018360001916600019168152602001826000191660001916815260200194505050505060206040516020810390808403906000865af1158015612528573d6000803e3d6000fd5b5050604051601f190151600354909250600160a060020a038084169116149050612555576000925061255a565b600192505b50509695505050505050565b6000903b1190565b600780548290811061257c57fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561260d5780601f106125e25761010080835404028352916020019161260d565b820191906000526020600020905b8154815290600101906020018083116125f057829003601f168201915b505050505081565b611afb60118484846134dd565b600080600080600080612636898989612c39565b94506001851515141561264c57600195506127cd565b600091505b601c5482101561274c57601b80548390811061266957fe5b600091825260209091200154600160a060020a03169250821561274157604080517fa00b38c400000000000000000000000000000000000000000000000000000000815260ff808c166004830152600160a060020a038b81166024840152908a166044830152915194955085949185169163a00b38c4916064808201926020929091908290030181600087803b15801561270257600080fd5b505af1158015612716573d6000803e3d6000fd5b505050506040513d602081101561272c57600080fd5b505115156001141561274157600195506127cd565b600190910190612651565b87905080600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561278d57600080fd5b505af11580156127a1573d6000803e3d6000fd5b505050506040513d60208110156127b757600080fd5b5051600354600160a060020a0390811691161495505b50505050509392505050565b600081565b600061129d601d613277565b611afb601d8484846134dd565b600354600160a060020a031681565b600061129d6011613277565b60008686868686866040516020018087600160a060020a0316600160a060020a03166c010000000000000000000000000281526014018660ff1660ff167f010000000000000000000000000000000000000000000000000000000000000002815260010185805190602001908083835b602083106128a15780518252601f199092019160209182019101612882565b51815160209384036101000a600019018019909216911617905287519190930192870191508083835b602083106128e95780518252601f1990920191602091820191016128ca565b51815160209384036101000a60001901801990921691161790528651919093019286810192500280838360005b8381101561292e578181015183820152602001612916565b50505050905001828051906020019060200280838360005b8381101561295e578181015183820152602001612946565b5050505090500196505050505050506040516020818303038152906040526040518082805190602001908083835b602083106129ab5780518252601f19909201916020918201910161298c565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209a9950505050505050505050565b50600190565b604080516c01000000000000000000000000600160a060020a0387160260208083019190915260348201869052605482018590526074808301859052835180840390910181526094909201928390528151600093918291908401908083835b60208310612a665780518252601f199092019160209182019101612a47565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912098975050505050505050565b612aa36123da565b1515612aae57600080fd5b8051608011612abc57600080fd5b8051612acf906008906020840190613cab565b506004547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316612b06611272565b60408051600160a060020a038085168252831660208201526060918101828152600880546002600019610100600184161502019091160493830184905292608083019084908015612b985780601f10612b6d57610100808354040283529160200191612b98565b820191906000526020600020905b815481529060010190602001808311612b7b57829003601f168201915b505094505050505060405180910390a150565b600b805482908110612bb957fe5b600091825260209091200154600160a060020a0316905081565b600080805b600c54811015612c235783600160a060020a0316600b82815481101515612bfb57fe5b600091825260209091200154600160a060020a03161415612c1b57600191505b600101612bd8565b5092915050565b601d5460205460ff9091169082565b600080839050600360009054906101000a9004600160a060020a0316600160a060020a031681600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015612c9c57600080fd5b505af1158015612cb0573d6000803e3d6000fd5b505050506040513d6020811015612cc657600080fd5b5051600160a060020a03161415612ce05760019150612d8d565b600f5460ff86811691161415612d0357612cfc601585856139f6565b9150612d8d565b600f5460ff868116610100909204161415612d2457612cfc601985856139f6565b600f5460ff86811662010000909204161415612d4657612cfc601185856139f6565b600f5460ff868116640100000000909204161415612d6a57612cfc602185856139f6565b600f5460ff8681166301000000909204161415612d8d57612cfc601d85856139f6565b509392505050565b600160a060020a03166000908152601e602052604090205460ff1690565b600f5460009061182e90640100000000900460ff168484612622565b60155460185460ff9091169082565b601f80546000919083908110611cf757fe5b600454600160a060020a031681565b600354600160a060020a0316331480612e1b5750612e1b61180a565b1515612e2657600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015612ec55780601f10612e9a57610100808354040283529160200191612ec5565b820191906000526020600020905b815481529060010190602001808311612ea857829003601f168201915b50509250505060405180910390a1565b60115460145460ff9091169082565b600c5481565b600354600160a060020a0316321480612f0d5750600354600160a060020a031633145b1515612f1857600080fd5b600a8054600160a060020a031916600160a060020a0392909216919091179055565b60145490565b601780546000919083908110611cf757fe5b601380546000919083908110611cf757fe5b600061129d6019613277565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561260d5780601f106125e25761010080835404028352916020019161260d565b600381565b60185490565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b611afb60198484846134dd565b600354600160a060020a03163214806130375750600354600160a060020a031633145b151561304257600080fd5b600160a060020a038116151561305757600080fd5b60038054600160a060020a031916600160a060020a0392909216919091179055565b600060265482111561308d57506001611319565b506000919050565b600160a060020a031660009081526012602052604090205460ff1690565b60245490565b60035460009081908190600160a060020a03163214806130e35750600354600160a060020a031633145b15156130ee57600080fd5b5050600c546000190160005b600c54811015611ae25783600160a060020a0316600b8281548110151561311d57fe5b600091825260209091200154600160a060020a0316141561325457600b80548290811061314657fe5b60009182526020909120018054600160a060020a03191690558082146131eb57600b80548390811061317457fe5b600091825260209091200154600b8054600160a060020a03909216918390811061319a57fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600b8054839081106131d157fe5b60009182526020909120018054600160a060020a03191690555b600c829055600160a060020a0384166000818152600d60209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250611ae7565b6001016130fa565b600f5460009061182e906301000000900460ff168484612622565b600080805b8360030154811015612c23576132b6846002018281548110151561329c57fe5b600091825260209091200154600160a060020a0316612566565b1515613440577fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b2608185600201838154811015156132ef57fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526004908201527f6465616400000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16002840180548290811061336057fe5b60009182526020909120018054600160a060020a031916905560038401546001929092019160001901811461342f578360020160018560030154038154811015156133a757fe5b600091825260209091200154600285018054600160a060020a0390921691839081106133cf57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a0316021790555083600201600185600301540381548110151561341557fe5b60009182526020909120018054600160a060020a03191690555b6003840180546000190190556134d8565b7fa33a9370a938260eee2537d9480ca0caa9789521da8e57afb3a0699d3ff9b26081856002018381548110151561347357fe5b600091825260209182902001546040805192830193909352600160a060020a03168183015260608082526005908201527f616c697665000000000000000000000000000000000000000000000000000000608082015290519081900360a00190a16001015b61327c565b60008060008060006134ed613d19565b600060ff8816156136e15760048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152329381019390935251600160a060020a03909116985088916363e6ffdd9160248083019260209291908290030181600087803b15801561356257600080fd5b505af1158015613576573d6000803e3d6000fd5b505050506040513d602081101561358c57600080fd5b50519550600160a060020a03861615156136215789945084600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156135e157600080fd5b505af11580156135f5573d6000803e3d6000fd5b505050506040513d602081101561360b57600080fd5b5051600160a060020a0316321461362157600080fd5b600160a060020a038616156136e1578a54604080517f7fb52f1a00000000000000000000000000000000000000000000000000000000815260ff9092166004830152600160a060020a038c8116602484015260026044840152905188965090861691637fb52f1a9160648083019260209291908290030181600087803b1580156136aa57600080fd5b505af11580156136be573d6000803e3d6000fd5b505050506040513d60208110156136d457600080fd5b505115156136e157600080fd5b600160a060020a038a16600090815260018c01602090815260409182902054600a60ff9182169081068216808752606482068190038316938701849052928103929092031691840191909152925061373832611e98565b15156001141561386f5760ff8816151561376b5760008260ff8b166003811061375d57fe5b60ff90921660209290920201525b60018260ff8b166003811061377c57fe5b602002015160ff16148015613795575060ff8816600114155b156137e057601060ff8a16600381106137aa57fe5b602081049091015460ff601f9092166101000a9004811689029083908b16600381106137d257fe5b60ff90921660209290920201525b600160ff89161061383357601060ff8a16600381106137fb57fe5b602091828204019190069054906101000a900460ff16600202828a60ff1660038110151561382557fe5b60ff90921660209290920201525b60ff8916158015613846575060ff881615155b1561386a5760028260ff8b166003811061385c57fe5b60ff90921660209290920201525b613909565b600160ff89161080159061389757508160ff8a166003811061388d57fe5b602002015160ff16155b156138e057601060ff8a16600381106138ac57fe5b602081049091015460ff601f9092166101000a900481169083908b16600381106138d257fe5b60ff90921660209290920201525b60ff881615156139095760008260ff8b16600381106138fb57fe5b60ff90921660209290920201525b81600260200201518260016020020151836000602002015101019050808b60010160008c600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508060ff1660001415801561397a575060ff8316155b15613989576139898b8b613a4a565b60ff8116151561399f5761399d8b8b613ae1565b505b60408051308152600160a060020a038c16602082015260ff83168183015290517f23dcae6acc296731e3679d01e7cd963988e5a372850a0a1db2b9b01539e19ff49181900360600190a15050505050505050505050565b600160a060020a038216600090815260018401602052604081205460ff90811690601090841660038110613a2657fe5b60208104919091015460ff601f9092166101000a9004811691161015949350505050565b600282015460038301541015613aa35780826002018360030154815481101515613a7057fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550613ad4565b60028201805460018101825560009182526020909120018054600160a060020a031916600160a060020a0383161790555b5060030180546001019055565b6000805b8360030154811015613c1c5782600160a060020a03168460020182815481101515613b0c57fe5b600091825260209091200154600160a060020a03161415613c145760028401805482908110613b3757fe5b60009182526020909120018054600160a060020a03191690556003840154600019018114613bff57836002016001856003015403815481101515613b7757fe5b600091825260209091200154600285018054600160a060020a039092169183908110613b9f57fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a03160217905550836002016001856003015403815481101515613be557fe5b60009182526020909120018054600160a060020a03191690555b60038401805460001901905560019150612c23565b600101613ae5565b5060009392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613c5f5780548555613c9b565b82800160010185558215613c9b57600052602060002091601f016020900482015b82811115613c9b578254825591600101919060010190613c80565b50613ca7929150613d38565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613cec57805160ff1916838001178555613c9b565b82800160010185558215613c9b579182015b82811115613c9b578251825591602001919060010190613cfe565b6060604051908101604052806003906020820280388339509192915050565b61127f91905b80821115613ca75760008155600101613d3e5600583d8312ef7016406c7ea8ba9796b9e55ac1fdc22455754cbc93869509faefada165627a7a7230582011a69c8889580ec0c9a639a03d76fe5fc9a9f4ebf4ced7d1bbd44ede5e7d99260029"
};
module.exports = contract;
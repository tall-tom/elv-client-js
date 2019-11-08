"use strict";

var contract = {
  "abi": [{
    "constant": true,
    "inputs": [],
    "name": "parentAddress",
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
    "name": "creator",
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
    "inputs": [],
    "name": "kill",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
    "name": "pendingHash",
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
      "name": "",
      "type": "uint256"
    }],
    "name": "versionTimestamp",
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
    "name": "objectHash",
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
      "name": "_versionHash",
      "type": "string"
    }],
    "name": "deleteVersion",
    "outputs": [{
      "name": "",
      "type": "int256"
    }],
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
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
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
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "objectHash",
      "type": "string"
    }],
    "name": "VersionConfirm",
    "type": "event"
  }, {
    "anonymous": false,
    "inputs": [{
      "indexed": false,
      "name": "spaceAddress",
      "type": "address"
    }, {
      "indexed": false,
      "name": "versionHash",
      "type": "string"
    }, {
      "indexed": false,
      "name": "index",
      "type": "int256"
    }],
    "name": "VersionDelete",
    "type": "event"
  }],
  "bytecode": "60806040527f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f4564697461626c6532303139303830313133353530304d4c00000000000000006004557f436f6e7461696e657232303139303532393039313830304d4c00000000000000600b55600e5560018054600160a060020a031990811632908117909255600280549091169091179055611d59806100a76000396000f3006080604052600436106101a75763ffffffff60e060020a600035041662821de381146101a957806302d05d3f146101da5780630eaec2c5146101ef5780630f58a7861461022457806314cfabb31461024b5780631cdbee5a146102605780631f2caaec1461028157806326683e141461029957806329d00219146102ba57806329dedde5146102db5780632cf99422146102fc57806332eaf21b1461031d578063331b86c0146103325780633dd71d991461024b57806341c0e1b514610359578063446e88261461036e57806354fd4d5014610376578063628449fd1461038b5780636d2e4b1b146104155780636e375427146104365780637886f7471461044b5780637ca8f618146104635780638da5cb5b1461047b57806395a078e8146104905780639867db74146104b1578063991a3a7c1461050a5780639b55f901146101ef5780639cb121ba14610522578063af570c0414610543578063c287e0ed14610558578063c65bcbe21461056d578063c9e8e72d14610582578063e02dd9c2146105a3578063e1a70717146105b8578063f2fde38b14610611578063fd08919614610632575b005b3480156101b557600080fd5b506101be610653565b60408051600160a060020a039092168252519081900360200190f35b3480156101e657600080fd5b506101be610663565b3480156101fb57600080fd5b50610210600160a060020a0360043516610672565b604080519115158252519081900360200190f35b34801561023057600080fd5b506101a7600160a060020a03600435811690602435166106a3565b34801561025757600080fd5b50610210610818565b34801561026c57600080fd5b506101be600160a060020a036004351661081d565b34801561028d57600080fd5b506101be600435610838565b3480156102a557600080fd5b50610210600160a060020a0360043516610abc565b3480156102c657600080fd5b50610210600160a060020a0360043516610b5b565b3480156102e757600080fd5b50610210600160a060020a0360043516610b61565b34801561030857600080fd5b50610210600160a060020a0360043516610b7f565b34801561032957600080fd5b506101be610c9f565b34801561033e57600080fd5b50610347610cae565b60408051918252519081900360200190f35b34801561036557600080fd5b506101a7610cb4565b610210610cf0565b34801561038257600080fd5b50610347610ee0565b34801561039757600080fd5b506103a0610ee6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103da5781810151838201526020016103c2565b50505050905090810190601f1680156104075780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561042157600080fd5b506101a7600160a060020a0360043516610f74565b34801561044257600080fd5b50610210610fc2565b34801561045757600080fd5b50610347600435610fd3565b34801561046f57600080fd5b506103a0600435610ff2565b34801561048757600080fd5b506101be611066565b34801561049c57600080fd5b50610210600160a060020a0360043516611075565b3480156104bd57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101a794369492936024939284019190819084018382808284375094975061107b9650505050505050565b34801561051657600080fd5b506101be6004356111a8565b34801561052e57600080fd5b50610210600160a060020a03600435166111d0565b34801561054f57600080fd5b506101be611227565b34801561056457600080fd5b506101a7611236565b34801561057957600080fd5b5061034761130c565b34801561058e57600080fd5b506101a7600160a060020a0360043516611312565b3480156105af57600080fd5b506103a0611362565b3480156105c457600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526103479436949293602493928401919081908401838280828437509497506113bd9650505050505050565b34801561061d57600080fd5b506101a7600160a060020a0360043516611965565b34801561063e57600080fd5b50610210600160a060020a03600435166119ca565b600354600160a060020a03165b90565b600154600160a060020a031681565b600254600090600160a060020a038381169116148061069b5750600254600160a060020a031633145b90505b919050565b600254600160a060020a03163214806106c65750600254600160a060020a031633145b15156106d157600080fd5b600160a060020a038083166000908152600f6020526040902054161580156106ff57506106fd826111d0565b155b156107ab57600d54600e5410156107555781600d600e5481548110151561072257fe5b9060005260206000200160006101000a815481600160a060020a030219169083600160a060020a031602179055506107a1565b600d80546001810182556000919091527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb5018054600160a060020a031916600160a060020a0384161790555b600e805460010190555b600160a060020a038281166000818152600f60209081526040918290208054600160a060020a0319169486169485179055815192835282019290925281517f280016f7418306a55542432120fd1a239ef9fcc1a92694d8d44ca76be0249ea7929181900390910190a15050565b600090565b600f60205260009081526040902054600160a060020a031681565b600080805b600d54821015610ab057600d80548390811061085557fe5b6000918252602091829020015460408051808401889052815180820385018152908201918290528051600160a060020a03909316945092909182918401908083835b602083106108b65780518252601f199092019160209182019101610897565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191681600160a060020a031663e02dd9c26040518163ffffffff1660e060020a028152600401600060405180830381600087803b15801561092557600080fd5b505af1158015610939573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052602081101561096257600080fd5b81019080805164010000000081111561097a57600080fd5b8201602081018481111561098d57600080fd5b81516401000000008111828201871017156109a757600080fd5b50509291905050506040516020018082805190602001908083835b602083106109e15780518252601f1990920191602091820191016109c2565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310610a445780518252601f199092019160209182019101610a25565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415610aa557600d805483908110610a8957fe5b600091825260209091200154600160a060020a03169250610ab5565b60019091019061083d565b600092505b5050919050565b600354604080517f26683e14000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151600093929092169182916326683e1491602480830192602092919082900301818887803b158015610b2857600080fd5b505af1158015610b3c573d6000803e3d6000fd5b505050506040513d6020811015610b5257600080fd5b50519392505050565b50600090565b6000600e5460001415610b765750600161069e565b61069b826111d0565b60008033600160a060020a03841614610b9757600080fd5b82905080600160a060020a0316638280dd8f60006040518263ffffffff1660e060020a02815260040180828152602001915050602060405180830381600087803b158015610be457600080fd5b505af1158015610bf8573d6000803e3d6000fd5b505050506040513d6020811015610c0e57600080fd5b5050604080517f27c1c21d0000000000000000000000000000000000000000000000000000000081529051600160a060020a038316916327c1c21d9160048083019260209291908290030181600087803b158015610c6b57600080fd5b505af1158015610c7f573d6000803e3d6000fd5b505050506040513d6020811015610c9557600080fd5b5051159392505050565b600c54600160a060020a031681565b60075490565b600254600160a060020a0316321480610cd75750600254600160a060020a031633145b1515610ce257600080fd5b600254600160a060020a0316ff5b6000610cfa610818565b1515610d0557600080fd5b600a5460ff161515610d1657600080fd5b600060058054600181600116156101000203166002900490501115610dc55760078054600181810180845560009390935260058054610d8c937fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880192600261010091831615919091026000190190911604611b6d565b5050600654600880546001810182556000919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301555b60098054610de89160059160026000196101006001841615020190911604611b6d565b5042600655604080516020810191829052600090819052610e0b91600991611bf2565b50600a805460ff1916905560035460408051600160a060020a039092168083526020830182815260058054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e94929390929190606083019084908015610ecb5780601f10610ea057610100808354040283529160200191610ecb565b820191906000526020600020905b815481529060010190602001808311610eae57829003601f168201915b5050935050505060405180910390a150600190565b600b5481565b6009805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f6c5780601f10610f4157610100808354040283529160200191610f6c565b820191906000526020600020905b815481529060010190602001808311610f4f57829003601f168201915b505050505081565b600154600160a060020a03163214610f8b57600080fd5b600160a060020a0381161515610fa057600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a0316321490565b6008805482908110610fe157fe5b600091825260209091200154905081565b600780548290811061100057fe5b600091825260209182902001805460408051601f6002600019610100600187161502019094169390930492830185900485028101850190915281815293509091830182828015610f6c5780601f10610f4157610100808354040283529160200191610f6c565b600254600160a060020a031681565b50600190565b611083610fc2565b151561108e57600080fd5b600a5460ff161561109e57600080fd5b80516080116110ac57600080fd5b80516110bf906009906020840190611bf2565b50600a805460ff191660011790556003547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316611103610653565b60408051600160a060020a0380851682528316602082015260609181018281526009805460026000196101006001841615020190911604938301849052926080830190849080156111955780601f1061116a57610100808354040283529160200191611195565b820191906000526020600020905b81548152906001019060200180831161117857829003601f168201915b505094505050505060405180910390a150565b600d8054829081106111b657fe5b600091825260209091200154600160a060020a0316905081565b600080805b600e548110156112205783600160a060020a0316600d828154811015156111f857fe5b600091825260209091200154600160a060020a0316141561121857600191505b6001016111d5565b5092915050565b600354600160a060020a031681565b600254600160a060020a03163314806112525750611252610818565b151561125d57600080fd5b60408051602080825260058054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b65939092918291820190849080156112fc5780601f106112d1576101008083540402835291602001916112fc565b820191906000526020600020905b8154815290600101906020018083116112df57829003601f168201915b50509250505060405180910390a1565b600e5481565b600254600160a060020a03163214806113355750600254600160a060020a031633145b151561134057600080fd5b600c8054600160a060020a031916600160a060020a0392909216919091179055565b6005805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610f6c5780601f10610f4157610100808354040283529160200191610f6c565b6000806000806000806113ce610fc2565b15156113d957600080fd5b866040516020018082805190602001908083835b6020831061140c5780518252601f1990920191602091820191016113ed565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b6020831061146f5780518252601f199092019160209182019101611450565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209450600560405160200180828054600181600116156101000203166002900480156114fe5780601f106114dc5761010080835404028352918201916114fe565b820191906000526020600020905b8154815290600101906020018083116114ea575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106115415780518252601f199092019160209182019101611522565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209650505050848414156116625760408051602081019182905260009081905261159591600591611bf2565b506000600681905560035460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b8381101561161d578181015183820152602001611605565b50505050905090810190601f16801561164a5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a16000955061195b565b6000199250600091505b60075482101561187857600780548390811061168457fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156116ec5780601f106116ca5761010080835404028352918201916116ec565b820191906000526020600020905b8154815290600101906020018083116116d8575b50509150506040516020818303038152906040526040518082805190602001908083835b6020831061172f5780518252601f199092019160209182019101611710565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912093505050508481141561186d57600780548390811061177357fe5b9060005260206000200160006117899190611c60565b600880548390811061179757fe5b600091825260208220015560075460001901821461183d576007805460001981019081106117c157fe5b906000526020600020016007838154811015156117da57fe5b906000526020600020019080546001816001161561010002031660029004611803929190611b6d565b5060088054600019810190811061181657fe5b906000526020600020015460088381548110151561183057fe5b6000918252602090912001555b6007805490611850906000198301611ca7565b506008805490611864906000198301611cd0565b50819250611878565b60019091019061166c565b60001983141561188757600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600360009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561191b578181015183820152602001611903565b50505050905090810190601f1680156119485780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b600254600160a060020a03163214806119885750600254600160a060020a031633145b151561199357600080fd5b600160a060020a03811615156119a857600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60025460009081908190600160a060020a03163214806119f45750600254600160a060020a031633145b15156119ff57600080fd5b5050600e546000190160005b600e54811015610ab05783600160a060020a0316600d82815481101515611a2e57fe5b600091825260209091200154600160a060020a03161415611b6557600d805482908110611a5757fe5b60009182526020909120018054600160a060020a0319169055808214611afc57600d805483908110611a8557fe5b600091825260209091200154600d8054600160a060020a039092169183908110611aab57fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600d805483908110611ae257fe5b60009182526020909120018054600160a060020a03191690555b600e829055600160a060020a0384166000818152600f60209081526040918290208054600160a060020a0319169055815192835290517fd41375b9d347dfe722f90a780731abd23b7855f9cf14ea7063c4cab5f9ae58e29281900390910190a160019250610ab5565b600101611a0b565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611ba65780548555611be2565b82800160010185558215611be257600052602060002091601f016020900482015b82811115611be2578254825591600101919060010190611bc7565b50611bee929150611cf0565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611c3357805160ff1916838001178555611be2565b82800160010185558215611be2579182015b82811115611be2578251825591602001919060010190611c45565b50805460018160011615610100020316600290046000825580601f10611c865750611ca4565b601f016020900490600052602060002090810190611ca49190611cf0565b50565b815481835581811115611ccb57600083815260209020611ccb918101908301611d0a565b505050565b815481835581811115611ccb57600083815260209020611ccb9181019083015b61066091905b80821115611bee5760008155600101611cf6565b61066091905b80821115611bee576000611d248282611c60565b50600101611d105600a165627a7a72305820d5bff3e62d3d406cdccf0f2895cfaef9a7c7d32e0dfa2a44df8ee86f1c2dbb680029"
};
module.exports = contract;
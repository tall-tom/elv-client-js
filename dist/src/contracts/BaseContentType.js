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
    "constant": false,
    "inputs": [{
      "name": "stakeholder",
      "type": "address"
    }, {
      "name": "access_type",
      "type": "uint8"
    }, {
      "name": "access",
      "type": "uint8"
    }],
    "name": "setRights",
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
    "name": "setGroupRights",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
      "name": "newOwner",
      "type": "address"
    }],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
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
  }, {
    "anonymous": false,
    "inputs": [],
    "name": "AccessRequest",
    "type": "event"
  }],
  "bytecode": "608060408190527f41636365737369626c6532303139303232323133353930304d4c0000000000006000557f4f776e61626c6532303139303532383139333830304d4c0000000000000000006001557f4564697461626c6532303139303830313133353530304d4c00000000000000006005557f42617365436f6e74656e745479706532303139303831333130353030304d4c00600c5560208061178483398101604052516002805432600160a060020a0319918216811790925560038054821690921790915560048054909116600160a060020a03909216919091179055611697806100ed6000396000f30060806040526004361061010d5763ffffffff60e060020a600035041662821de3811461010f57806302d05d3f146101405780630fe1b5a21461015557806314cfabb31461018257806322e564eb146101ab578063331b86c0146101d857806341c0e1b5146101ff578063446e88261461021457806354fd4d501461021c578063628449fd146102315780636d2e4b1b146102bb5780636e375427146102dc5780637886f747146102f15780637ca8f618146103095780638da5cb5b146103215780639867db7414610336578063af570c041461038f578063c287e0ed146103a4578063e02dd9c2146103b9578063e1a70717146103ce578063f155188714610427578063f2fde38b1461043c575b005b34801561011b57600080fd5b5061012461045d565b60408051600160a060020a039092168252519081900360200190f35b34801561014c57600080fd5b5061012461046d565b34801561016157600080fd5b5061010d600160a060020a036004351660ff6024358116906044351661047c565b34801561018e57600080fd5b5061019761054c565b604080519115158252519081900360200190f35b3480156101b757600080fd5b5061010d600160a060020a036004351660ff602435811690604435166105eb565b3480156101e457600080fd5b506101ed61067d565b60408051918252519081900360200190f35b34801561020b57600080fd5b5061010d610683565b6101976106bf565b34801561022857600080fd5b506101ed6108af565b34801561023d57600080fd5b506102466108b5565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610280578181015183820152602001610268565b50505050905090810190601f1680156102ad5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102c757600080fd5b5061010d600160a060020a0360043516610943565b3480156102e857600080fd5b5061019761099e565b3480156102fd57600080fd5b506101ed600435610b55565b34801561031557600080fd5b50610246600435610b74565b34801561032d57600080fd5b50610124610be8565b34801561034257600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261010d943694929360249392840191908190840183828082843750949750610bf79650505050505050565b34801561039b57600080fd5b50610124610d24565b3480156103b057600080fd5b5061010d610d33565b3480156103c557600080fd5b50610246610e09565b3480156103da57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101ed943694929360249392840191908190840183828082843750949750610e649650505050505050565b34801561043357600080fd5b5061019761140c565b34801561044857600080fd5b5061010d600160a060020a036004351661143d565b600454600160a060020a03165b90565b600254600160a060020a031681565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152600160a060020a03878116948201949094529051929091169160009183916363e6ffdd9160248082019260209290919082900301818787803b1580156104ec57600080fd5b505af1158015610500573d6000803e3d6000fd5b505050506040513d602081101561051657600080fd5b50519050600160a060020a038116151561053a576105358585856105eb565b610545565b6105458185856105eb565b5050505050565b60048054604080517f26683e14000000000000000000000000000000000000000000000000000000008152339381019390935251600092600160a060020a039092169182916326683e149160248082019260209290919082900301818887803b1580156105b857600080fd5b505af11580156105cc573d6000803e3d6000fd5b505050506040513d60208110156105e257600080fd5b505191505b5090565b604080517f8635adb500000000000000000000000000000000000000000000000000000000815230600482015260ff80851660248301528316604482015290518491600160a060020a03831691638635adb59160648082019260009290919082900301818387803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b5050505050505050565b60085490565b600354600160a060020a03163214806106a65750600354600160a060020a031633145b15156106b157600080fd5b600354600160a060020a0316ff5b60006106c961054c565b15156106d457600080fd5b600b5460ff1615156106e557600080fd5b600060068054600181600116156101000203166002900490501115610794576008805460018181018084556000939093526006805461075b937ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee301926002610100918316159190910260001901909116046114af565b5050600754600980546001810182556000919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af01555b600a80546107b791600691600260001961010060018416150201909116046114af565b50426007556040805160208101918290526000908190526107da91600a91611530565b50600b805460ff1916905560045460408051600160a060020a039092168083526020830182815260068054600260001960018316156101000201909116049385018490527f482875da75e6d9f93f74a5c1a61f14cf08822057c01232f44cb92ae998e30d8e9492939092919060608301908490801561089a5780601f1061086f5761010080835404028352916020019161089a565b820191906000526020600020905b81548152906001019060200180831161087d57829003601f168201915b5050935050505060405180910390a150600190565b600c5481565b600a805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561093b5780601f106109105761010080835404028352916020019161093b565b820191906000526020600020905b81548152906001019060200180831161091e57829003601f168201915b505050505081565b600254600160a060020a0316321461095a57600080fd5b600160a060020a038116151561096f57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60048054604080517f63e6ffdd000000000000000000000000000000000000000000000000000000008152329381019390935251600092600160a060020a03909216918391829184916363e6ffdd9160248082019260209290919082900301818787803b158015610a0e57600080fd5b505af1158015610a22573d6000803e3d6000fd5b505050506040513d6020811015610a3857600080fd5b50519150600160a060020a03821615610b4a5781905080600160a060020a031663fe538c5a3083600160a060020a0316635d97b6c26040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015610a9c57600080fd5b505af1158015610ab0573d6000803e3d6000fd5b505050506040513d6020811015610ac657600080fd5b50516040805160e060020a63ffffffff8616028152600160a060020a03909316600484015260ff90911660248301525160448083019260209291908290030181600087803b158015610b1757600080fd5b505af1158015610b2b573d6000803e3d6000fd5b505050506040513d6020811015610b4157600080fd5b50519350610b4f565b600093505b50505090565b6009805482908110610b6357fe5b600091825260209091200154905081565b6008805482908110610b8257fe5b600091825260209182902001805460408051601f600260001961010060018716150201909416939093049283018590048502810185019091528181529350909183018282801561093b5780601f106109105761010080835404028352916020019161093b565b600354600160a060020a031681565b610bff61099e565b1515610c0a57600080fd5b600b5460ff1615610c1a57600080fd5b8051608011610c2857600080fd5b8051610c3b90600a906020840190611530565b50600b805460ff191660011790556004547fb3ac059d88af6016aca1aebb7b3e796f2e7420435c59c563687814e9b85daa7590600160a060020a0316610c7f61045d565b60408051600160a060020a038085168252831660208201526060918101828152600a80546002600019610100600184161502019091160493830184905292608083019084908015610d115780601f10610ce657610100808354040283529160200191610d11565b820191906000526020600020905b815481529060010190602001808311610cf457829003601f168201915b505094505050505060405180910390a150565b600454600160a060020a031681565b600354600160a060020a0316331480610d4f5750610d4f61054c565b1515610d5a57600080fd5b60408051602080825260068054600260001961010060018416150201909116049183018290527f403f30aa5f4f2f89331a7b50054f64a00ce206f4d0a37f566ff344bbe46f8b6593909291829182019084908015610df95780601f10610dce57610100808354040283529160200191610df9565b820191906000526020600020905b815481529060010190602001808311610ddc57829003601f168201915b50509250505060405180910390a1565b6006805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561093b5780601f106109105761010080835404028352916020019161093b565b600080600080600080610e7561099e565b1515610e8057600080fd5b866040516020018082805190602001908083835b60208310610eb35780518252601f199092019160209182019101610e94565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b60208310610f165780518252601f199092019160209182019101610ef7565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020945060066040516020018082805460018160011615610100020316600290048015610fa55780601f10610f83576101008083540402835291820191610fa5565b820191906000526020600020905b815481529060010190602001808311610f91575b50509150506040516020818303038152906040526040518082805190602001908083835b60208310610fe85780518252601f199092019160209182019101610fc9565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091209650505050848414156111095760408051602081019182905260009081905261103c91600691611530565b506000600781905560045460408051600160a060020a03909216808352908201839052606060208084018281528c51928501929092528b517f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f519593948d9493909290916080840191860190808383885b838110156110c45781810151838201526020016110ac565b50505050905090810190601f1680156110f15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a160009550611402565b6000199250600091505b60085482101561131f57600880548390811061112b57fe5b9060005260206000200160405160200180828054600181600116156101000203166002900480156111935780601f10611171576101008083540402835291820191611193565b820191906000526020600020905b81548152906001019060200180831161117f575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106111d65780518252601f1990920191602091820191016111b7565b5181516020939093036101000a6000190180199091169216919091179052604051920182900390912093505050508481141561131457600880548390811061121a57fe5b906000526020600020016000611230919061159e565b600980548390811061123e57fe5b60009182526020822001556008546000190182146112e45760088054600019810190811061126857fe5b9060005260206000200160088381548110151561128157fe5b9060005260206000200190805460018160011615610100020316600290046112aa9291906114af565b506009805460001981019081106112bd57fe5b90600052602060002001546009838154811015156112d757fe5b6000918252602090912001555b60088054906112f79060001983016115e5565b50600980549061130b90600019830161160e565b5081925061131f565b600190910190611113565b60001983141561132e57600080fd5b7f238d74c13cda9ba51e904772d41a616a1b9b30d09802484df6279fe1c3c07f51600460009054906101000a9004600160a060020a031688856040518084600160a060020a0316600160a060020a0316815260200180602001838152602001828103825284818151815260200191508051906020019080838360005b838110156113c25781810151838201526020016113aa565b50505050905090810190601f1680156113ef5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a18295505b5050505050919050565b6040516000907fed78a9defa7412748c9513ba9cf680f57703a46dd7e0fb0b1e94063423c73e88908290a150600190565b600354600160a060020a03163214806114605750600354600160a060020a031633145b151561146b57600080fd5b600160a060020a038116151561148057600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106114e85780548555611524565b8280016001018555821561152457600052602060002091601f016020900482015b82811115611524578254825591600101919060010190611509565b506105e792915061162e565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061157157805160ff1916838001178555611524565b82800160010185558215611524579182015b82811115611524578251825591602001919060010190611583565b50805460018160011615610100020316600290046000825580601f106115c457506115e2565b601f0160209004906000526020600020908101906115e2919061162e565b50565b81548183558181111561160957600083815260209020611609918101908301611648565b505050565b815481835581811115611609576000838152602090206116099181019083015b61046a91905b808211156105e75760008155600101611634565b61046a91905b808211156105e7576000611662828261159e565b5060010161164e5600a165627a7a723058209675c09645c120c72d97231e6a0f75b101c149e381a4852e5c232f69c0a162850029"
};
module.exports = contract;
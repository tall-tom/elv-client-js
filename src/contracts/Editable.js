const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"updateRequest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"objectHash","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"object_hash","type":"bytes32"}],"name":"commit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"Commit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"objectHash","type":"bytes32"}],"name":"UpdateRequest","type":"event"}],"bytecode":"60606040527f4f776e61626c6532303139303232313130303530304d4c0000000000000000006000557f4564697461626c6532303139303232323134303130304d4c000000000000000060035560018054600160a060020a033216600160a060020a031991821681179092556002805490911690911790556103df806100866000396000f3006060604052600436106100985763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f811461009a57806341c0e1b5146100c957806354fd4d50146100dc5780636d2e4b1b146101015780638da5cb5b14610120578063c287e0ed14610133578063e02dd9c214610146578063f14fcbc814610159578063f2fde38b1461016f575b005b34156100a557600080fd5b6100ad61018e565b604051600160a060020a03909116815260200160405180910390f35b34156100d457600080fd5b61009861019d565b34156100e757600080fd5b6100ef6101e1565b60405190815260200160405180910390f35b341561010c57600080fd5b610098600160a060020a03600435166101e7565b341561012b57600080fd5b6100ad610246565b341561013e57600080fd5b610098610255565b341561015157600080fd5b6100ef6102c2565b341561016457600080fd5b6100986004356102c8565b341561017a57600080fd5b610098600160a060020a0360043516610339565b600154600160a060020a031681565b60025432600160a060020a03908116911614806101c8575060025433600160a060020a039081169116145b15156101d357600080fd5b600254600160a060020a0316ff5b60035481565b60015432600160a060020a0390811691161461020257600080fd5b600160a060020a038116151561021757600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a031681565b60025432600160a060020a0390811691161480610280575060025433600160a060020a039081169116145b151561028b57600080fd5b7f1b6452b35fd3ee7f1fad8558a9d3e79233f94d15fe657df3871f8efc2f97ef1960045460405190815260200160405180910390a1565b60045481565b60025432600160a060020a03908116911614806102f3575060025433600160a060020a039081169116145b15156102fe57600080fd5b60048190557f9e8a51bb6b34b9d5d18c14fd753ee3bf44e2256512665a4577281ffcc91943ff8160405190815260200160405180910390a150565b60025432600160a060020a0390811691161480610364575060025433600160a060020a039081169116145b151561036f57600080fd5b600160a060020a038116151561038457600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820638099b83d5dec2130e386149a12ac87afb05b2a4374d633eb9bc41f2f6afd6c0029"}; module.exports=contract;
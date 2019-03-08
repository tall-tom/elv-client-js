const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessInfo","outputs":[{"name":"","type":"int8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"runGrant","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"60606040527f4f776e61626c6532303139303232313130303530304d4c0000000000000000006000557f436f6e74656e7432303139303330313132313830304d4c00000000000000000060035560018054600160a060020a033216600160a060020a031991821681179092556002805490911690911790556104b2806100866000396000f3006060604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f81146100d15780630f82c16f14610100578063123e0e80146101b6578063176859531461025a5780633513a8051461026857806341c0e1b514610273578063450804421461028657806354fd4d501461029c5780636d2e4b1b146102af5780637b1cdb3e146102ce5780638da5cb5b146102d65780639e99bbea146102ce578063e870ed91146102e9578063f2fde38b146102f9575b005b34156100dc57600080fd5b6100e4610318565b604051600160a060020a03909116815260200160405180910390f35b341561010b57600080fd5b6101976004803560ff169060446024803590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061032795505050505050565b604051600092830b90920b825260208201526040908101905180910390f35b61024860048035906024803560ff16919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061033495505050505050565b60405190815260200160405180910390f35b61024860043560243561033e565b610248600435610346565b341561027e57600080fd5b6100cf610349565b341561029157600080fd5b61024860043561038d565b34156102a757600080fd5b610248610393565b34156102ba57600080fd5b6100cf600160a060020a0360043516610399565b6102486103f8565b34156102e157600080fd5b6100e46103fd565b610248600435602435151561033e565b341561030457600080fd5b6100cf600160a060020a036004351661040c565b600154600160a060020a031681565b6000196000935093915050565b6000949350505050565b600092915050565b90565b60025432600160a060020a0390811691161480610374575060025433600160a060020a039081169116145b151561037f57600080fd5b600254600160a060020a0316ff5b50600090565b60035481565b60015432600160a060020a039081169116146103b457600080fd5b600160a060020a03811615156103c957600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090565b600254600160a060020a031681565b60025432600160a060020a0390811691161480610437575060025433600160a060020a039081169116145b151561044257600080fd5b600160a060020a038116151561045757600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820aecbb12249668183768f137229da302c96cf0204baf1eb8175b4e8a1bddc86dc0029"}; module.exports=contract;
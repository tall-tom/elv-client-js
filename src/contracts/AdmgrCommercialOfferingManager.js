const contract={"abi":[{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessCharge","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"s","type":"string"}],"name":"DbgString","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"a","type":"address"}],"name":"DbgAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"u","type":"uint256"}],"name":"DbgUint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"606060405260008054600160a060020a033216600160a060020a03199182168117909255600180549091169091179055610e008061003e6000396000f3006060604052600436106100a05763ffffffff60e060020a60003504166302d05d3f81146100a2578063123e0e80146100d15780633513a8051461017557806341c0e1b51461018057806345080442146101935780636b2d13241461019e5780636d2e4b1b146101a95780637b1cdb3e146101c85780638da5cb5b146101d05780639e99bbea146101e3578063f2fde38b146101eb578063f8117ca21461020a575b005b34156100ad57600080fd5b6100b5610296565b604051600160a060020a03909116815260200160405180910390f35b61016360048035906024803560ff1691906064906044359081019083013580602080820201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506102a595505050505050565b60405190815260200160405180910390f35b6101636004356102af565b341561018b57600080fd5b6100a06102b2565b341561019e57600080fd5b6101636004356102f6565b34156101b457600080fd5b6100a0600160a060020a03600435166102fc565b61016361035b565b34156101db57600080fd5b6100b5610562565b610163610571565b34156101f657600080fd5b6100a0600160a060020a0360043516610576565b6101636004803560ff16906044602480359081019083013580602080820201604051908101604052809392919081815260200183836020028082843782019150505050505091908035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437509496506105f095505050505050565b600054600160a060020a031681565b6000949350505050565b90565b60015432600160a060020a03908116911614806102dd575060015433600160a060020a039081169116145b15156102e857600080fd5b600154600160a060020a0316ff5b50600090565b60005432600160a060020a0390811691161461031757600080fd5b600160a060020a038116151561032c57600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000806000806103696105fa565b604051809103906000f080151561037f57600080fd5b925033915082905081600160a060020a031663e53853038460405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b15156103d557600080fd5b5af115156103e257600080fd5b50505080600160a060020a031663564fb18d3060405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561043357600080fd5b5af1151561044057600080fd5b5050600154600160a060020a038084169250636d2e4b1b911660405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561049757600080fd5b5af115156104a457600080fd5b50505080600160a060020a031663f2fde38b83600160a060020a0316638da5cb5b6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156104f357600080fd5b5af1151561050057600080fd5b5050506040518051905060405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561054857600080fd5b5af1151561055557600080fd5b5050506000935050505090565b600154600160a060020a031681565b600090565b60015432600160a060020a03908116911614806105a1575060015433600160a060020a039081169116145b15156105ac57600080fd5b600160a060020a03811615156105c157600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000199392505050565b6040516107ca8061060b833901905600606060405260008054600160a060020a033216600160a060020a0319918216811790925560018054909116909117905561078c8061003e6000396000f3006060604052600436106101275763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166302d05d3f8114610129578063123e0e8014610158578063198e7671146101fc57806329ed6137146102125780633513a8051461023957806335b979ca14610244578063409fa2861461026357806341c0e1b51461027b578063450804421461028e5780634c937386146102a4578063564fb18d146102b75780636a9719b1146102d65780636b2d1324146102995780636d2e4b1b146102ee5780637b1cdb3e1461030d5780638da5cb5b146103155780639e99bbea1461030d578063af75d38f14610328578063b2041a151461033b578063f2fde38b1461034e578063f8117ca21461036d578063fb5e76e6146103f9575b005b341561013457600080fd5b61013c61040c565b604051600160a060020a03909116815260200160405180910390f35b6101ea60048035906024803560ff16919060649060443590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061041b95505050505050565b60405190815260200160405180910390f35b341561020757600080fd5b610127600435610425565b341561021d57600080fd5b610225610460565b604051901515815260200160405180910390f35b6101ea600435610469565b341561024f57600080fd5b610127600160a060020a036004351661046c565b341561026e57600080fd5b61012760043515156104d1565b341561028657600080fd5b61012761051a565b341561029957600080fd5b6101ea60043561055e565b34156102af57600080fd5b61013c610564565b34156102c257600080fd5b610127600160a060020a0360043516610573565b34156102e157600080fd5b61012760043515156105bd565b34156102f957600080fd5b610127600160a060020a0360043516610633565b6101ea610692565b341561032057600080fd5b61013c610697565b341561033357600080fd5b6101ea6106a6565b341561034657600080fd5b6102256106ac565b341561035957600080fd5b610127600160a060020a03600435166106cd565b6101ea6004803560ff169060446024803590810190830135806020808202016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284375094965061074795505050505050565b341561040457600080fd5b61013c610751565b600054600160a060020a031681565b6000949350505050565b60015432600160a060020a0390811691161480610450575060015433600160a060020a039081169116145b151561045b57600080fd5b600455565b60055460ff1681565b90565b60015432600160a060020a0390811691161480610497575060015433600160a060020a039081169116145b15156104a257600080fd5b6003805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015432600160a060020a03908116911614806104fc575060015433600160a060020a039081169116145b151561050757600080fd5b6005805460ff1916911515919091179055565b60015432600160a060020a0390811691161480610545575060015433600160a060020a039081169116145b151561055057600080fd5b600154600160a060020a0316ff5b50600090565b600254600160a060020a031681565b60005432600160a060020a0390811691161461058e57600080fd5b6002805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015432600160a060020a03908116911614806105e8575060015433600160a060020a039081169116145b15156105f357600080fd5b60038054911515740100000000000000000000000000000000000000000274ff000000000000000000000000000000000000000019909216919091179055565b60005432600160a060020a0390811691161461064e57600080fd5b600160a060020a038116151561066357600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600090565b600154600160a060020a031681565b60045481565b60035474010000000000000000000000000000000000000000900460ff1681565b60015432600160a060020a03908116911614806106f8575060015433600160a060020a039081169116145b151561070357600080fd5b600160a060020a038116151561071857600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000199392505050565b600354600160a060020a0316815600a165627a7a723058205575869694b52224149bb1413f49a2ba22a0a8c8c92c0eadd56cbf63e5cb99610029a165627a7a72305820e3d49730b493aede852b5f1b066d3e495eb4cc8f099fef64a3f690d36ed081620029"}; module.exports=contract;
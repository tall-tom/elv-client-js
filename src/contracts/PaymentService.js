const contract={"abi":[{"constant":false,"inputs":[{"name":"payment_account","type":"string"},{"name":"tx_nonce","type":"string"}],"name":"redeemTokenRequest","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"creator","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPendingRedeemRequest","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenValue","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccessInfo","outputs":[{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint8"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"bytes32[]"},{"name":"","type":"address[]"}],"name":"runAccess","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"runFinalize","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"payerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposed_status_code","type":"int256"}],"name":"runStatusChange","outputs":[{"name":"","type":"int256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"int256"}],"name":"runDescribeStatus","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"currency","type":"string"},{"name":"value","type":"uint256"}],"name":"setTokenValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_ACCESS","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newCreator","type":"address"}],"name":"transferCreatorship","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"payer_address","type":"address"}],"name":"setPayerAdress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"runCreate","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"runKill","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"contentSpace","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_SEE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bool"}],"name":"runGrant","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"currency","type":"string"},{"name":"value","type":"uint256"},{"name":"payment_proof","type":"string"},{"name":"tx_nonce","type":"string"}],"name":"redeemTokenExecuted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DEFAULT_CHARGE","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"idx","type":"uint256"}],"name":"redeemDbg","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"numtokens","type":"uint256"},{"indexed":false,"name":"pay_to","type":"string"},{"indexed":false,"name":"nonce","type":"string"}],"name":"RedeemTokenRequest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"currency","type":"string"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"payment_proof","type":"string"},{"indexed":false,"name":"nonce","type":"string"}],"name":"RedeemTokenExecuted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"currency","type":"string"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SetTokenValue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bool"}],"name":"LogBool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"a","type":"address"}],"name":"LogAddress","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"uint256"}],"name":"LogUint256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"u","type":"int256"}],"name":"LogInt256","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"b","type":"bytes32"}],"name":"LogBytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"label","type":"string"},{"indexed":false,"name":"payee","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"LogPayment","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunCreate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"result","type":"uint256"}],"name":"RunKill","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposedStatusCode","type":"int256"},{"indexed":false,"name":"returnStatusCode","type":"int256"}],"name":"RunStatusChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"level","type":"uint8"},{"indexed":false,"name":"calculateAccessCharge","type":"int256"}],"name":"RunAccessCharge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunAccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"requestID","type":"uint256"},{"indexed":false,"name":"result","type":"uint256"}],"name":"RunFinalize","type":"event"}],"bytecode":"7f4f776e61626c6532303139303532383139333830304d4c00000000000000000060009081557f436f6e74656e7432303139303531303135313630304d4c0000000000000000006004557f5061796d656e745365727669636532303139303331383130323830304d4c000060055560075560c0604052600360808190527f555344000000000000000000000000000000000000000000000000000000000060a0908152620000b19160089190620000df565b5060016009819055805432600160a060020a0319918216811790925560028054909116909117905562000184565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012257805160ff191683800117855562000152565b8280016001018555821562000152579182015b828111156200015257825182559160200191906001019062000135565b506200016092915062000164565b5090565b6200018191905b808211156200016057600081556001016200016b565b90565b6119f180620001946000396000f3006080604052600436106101525763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041662242534811461015457806302d05d3f146101f05780630491bbc01461022157806306ffce531461039a5780630f82c16f1461042e578063123e0e80146104f357806317685953146105805780632b2f1e141461058e5780633513a805146105a357806341c0e1b5146105ae57806345080442146105c35780634b8934d0146105db57806354fd4d50146106365780636af274171461064b5780636d2e4b1b146106765780637694561d146106975780637b1cdb3e146106b85780638da5cb5b146106c05780639e99bbea146106b8578063af570c04146106d5578063b535b03e146106ea578063e870ed91146106ff578063ea8a5de91461070f578063f185db0c146107ea578063f2fde38b146107ff578063f9cfa8c614610820575b005b6040805160206004803580820135601f81018490048402850184019095528484526101de94369492936024939284019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506108be9650505050505050565b60408051918252519081900360200190f35b3480156101fc57600080fd5b50610205610c20565b60408051600160a060020a039092168252519081900360200190f35b34801561022d57600080fd5b50610236610c2f565b6040518086600160a060020a0316600160a060020a03168152602001806020018581526020018060200180602001848103845288818151815260200191508051906020019080838360005b83811015610299578181015183820152602001610281565b50505050905090810190601f1680156102c65780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b838110156102f95781810151838201526020016102e1565b50505050905090810190601f1680156103265780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b83811015610359578181015183820152602001610341565b50505050905090810190601f1680156103865780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b3480156103a657600080fd5b506103af610ec5565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156103f25781810151838201526020016103da565b50505050905090810190601f16801561041f5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561043a57600080fd5b506040805160206004602480358281013584810280870186019097528086526104c496843560ff1696369660449591949091019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750949750610f669650505050505050565b6040805160ff958616815293851660208501529190931682820152606082019290925290519081900360800190f35b60408051602060046044358181013583810280860185019096528085526101de958335956024803560ff1696369695606495939492019291829185019084908082843750506040805187358901803560208181028481018201909552818452989b9a998901989297509082019550935083925085019084908082843750949750610f759650505050505050565b6101de600435602435610f80565b34801561059a57600080fd5b50610205610f88565b6101de600435610f97565b3480156105ba57600080fd5b50610152610f9a565b3480156105cf57600080fd5b506101de600435610fd6565b3480156105e757600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101529436949293602493928401919081908401838280828437509497505093359450610fdc9350505050565b34801561064257600080fd5b506101de6110ca565b34801561065757600080fd5b506106606110d0565b6040805160ff9092168252519081900360200190f35b34801561068257600080fd5b50610152600160a060020a03600435166110d5565b3480156106a357600080fd5b50610152600160a060020a0360043516611123565b6101de611173565b3480156106cc57600080fd5b50610205611178565b3480156106e157600080fd5b50610205611187565b3480156106f657600080fd5b50610660611196565b6101de6004356024351515610f80565b34801561071b57600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526101de94369492936024939284019190819084018382808284375050604080516020601f818a01358b0180359182018390048302840183018552818452989b8a359b909a90999401975091955091820193509150819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a99988101979196509182019450925082915084018382808284375094975061119b9650505050505050565b3480156107f657600080fd5b506106606116fc565b34801561080b57600080fd5b50610152600160a060020a0360043516611701565b34801561082c57600080fd5b50610838600435611766565b6040518084815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610881578181015183820152602001610869565b50505050905090810190601f1680156108ae5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b60006108c861182f565b3415156108d85760019150610c19565b506040805160c08101825233815281518083018352600381527f555344000000000000000000000000000000000000000000000000000000000060208281019190915282015234918101919091526060810184905260808101839052600160a08201526006546007541015610a075780600660075481548110151561095957fe5b60009182526020918290208351600692909202018054600160a060020a031916600160a060020a0390921691909117815582820151805191926109a492600185019290910190611871565b5060408201516002820155606082015180516109ca916003840191602090910190611871565b50608082015180516109e6916004840191602090910190611871565b5060a091909101516005909101805460ff1916911515919091179055610afa565b600680546001810180835560008390528351919092027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f81018054600160a060020a03909316600160a060020a03199093169290921782556020808501518051869493610a9a937ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40909101920190611871565b506040820151600282015560608201518051610ac0916003840191602090910190611871565b5060808201518051610adc916004840191602090910190611871565b5060a091909101516005909101805460ff1916911515919091179055505b6007600081548092919060010191905055507f66887b54b3a468d1f49f169043427354bba12c2a112aea5390bb426a96bf916c348585604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015610b77578181015183820152602001610b5f565b50505050905090810190601f168015610ba45780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015610bd7578181015183820152602001610bbf565b50505050905090810190601f168015610c045780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a1600091505b5092915050565b600154600160a060020a031681565b600060606000606080610c4061182f565b6007541515610c80576040805160208181018352600080835283518083018552818152845192830190945280825298509096508795509093509150610ebd565b600680546000908110610c8f57fe5b60009182526020918290206040805160c08101825260069093029091018054600160a060020a03168352600180820180548451601f60026000199584161561010002959095019092169390930490810187900487028301870190945283825293949193858301939192909190830182828015610d4c5780601f10610d2157610100808354040283529160200191610d4c565b820191906000526020600020905b815481529060010190602001808311610d2f57829003601f168201915b505050918352505060028281015460208084019190915260038401805460408051601f60001961010060018616150201909316959095049182018490048402850184018152818552909401939091830182828015610deb5780601f10610dc057610100808354040283529160200191610deb565b820191906000526020600020905b815481529060010190602001808311610dce57829003601f168201915b505050918352505060048201805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152938201939291830182828015610e7f5780601f10610e5457610100808354040283529160200191610e7f565b820191906000526020600020905b815481529060010190602001808311610e6257829003601f168201915b50505091835250506005919091015460ff161515602091820152815190820151604083015160608401516080850151939a5091985096509450925090505b509091929394565b6009546008805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181526060946000949390928491830182828015610f575780601f10610f2c57610100808354040283529160200191610f57565b820191906000526020600020905b815481529060010190602001808311610f3a57829003601f168201915b50505050509150915091509091565b60076000808093509350935093565b60005b949350505050565b600092915050565b600a54600160a060020a031681565b90565b600254600160a060020a0316321480610fbd5750600254600160a060020a031633145b1515610fc857600080fd5b600254600160a060020a0316ff5b50600090565b600254600160a060020a0316321480610fff5750600254600160a060020a031633145b151561100a57600080fd5b815161101d906008906020850190611871565b50806009819055507f5847a2cfd3bf297a9d3a67cfa50403274ce0289f9dac832c5cb7490a7972977a82826040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561108b578181015183820152602001611073565b50505050905090810190601f1680156110b85780820380516001836020036101000a031916815260200191505b50935050505060405180910390a15050565b60055481565b600281565b600154600160a060020a031632146110ec57600080fd5b600160a060020a038116151561110157600080fd5b60018054600160a060020a031916600160a060020a0392909216919091179055565b600254600160a060020a03163214806111465750600254600160a060020a031633145b151561115157600080fd5b600a8054600160a060020a031916600160a060020a0392909216919091179055565b600090565b600254600160a060020a031681565b600354600160a060020a031681565b600181565b600154600090600160a060020a031633148015906111c45750600a54600160a060020a03163314155b156111d157506003610f78565b816040516020018082805190602001908083835b602083106112045780518252601f1990920191602091820191016111e5565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040526040518082805190602001908083835b602083106112675780518252601f199092019160209182019101611248565b5181516020939093036101000a600019018019909116921691909117905260405192018290039091206006805491945092506000915081106112a557fe5b906000526020600020906006020160040160405160200180828054600181600116156101000203166002900480156113145780601f106112f2576101008083540402835291820191611314565b820191906000526020600020905b815481529060010190602001808311611300575b50509150506040516020818303038152906040526040518082805190602001908083835b602083106113575780518252601f199092019160209182019101611338565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191614156116f15760068054600090811061139d57fe5b6000918252602082206006909102018054600160a060020a0319168155906113c860018301826118ef565b60028201600090556003820160006113e091906118ef565b6113ee6004830160006118ef565b50600501805460ff191690556007805460001901908190556000101561157a57600660075481548110151561141f57fe5b90600052602060002090600602016006600081548110151561143d57fe5b6000918252602090912082546006909202018054600160a060020a031916600160a060020a039092169190911781556001808301805461149492808501929160026000199282161561010002929092011604611936565b5060028201548160020155600382018160030190805460018160011615610100020316600290046114c6929190611936565b50600482018160040190805460018160011615610100020316600290046114ee929190611936565b506005918201549101805460ff191660ff909216151591909117905560075460068054909190811061151c57fe5b6000918252602082206006909102018054600160a060020a03191681559061154760018301826118ef565b600282016000905560038201600061155f91906118ef565b61156d6004830160006118ef565b50600501805460ff191690555b7f34a9ae2cb75f5f06f7599e9cc92cb12c6a2f63af676d375bdc639acae37db5e08585858560405180806020018581526020018060200180602001848103845288818151815260200191508051906020019080838360005b838110156115ea5781810151838201526020016115d2565b50505050905090810190601f1680156116175780820380516001836020036101000a031916815260200191505b50848103835286518152865160209182019188019080838360005b8381101561164a578181015183820152602001611632565b50505050905090810190601f1680156116775780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838360005b838110156116aa578181015183820152602001611692565b50505050905090810190601f1680156116d75780820380516001836020036101000a031916815260200191505b5097505050505050505060405180910390a1506000610f78565b506001949350505050565b600481565b600254600160a060020a03163214806117245750600254600160a060020a031633145b151561172f57600080fd5b600160a060020a038116151561174457600080fd5b60028054600160a060020a031916600160a060020a0392909216919091179055565b60068054600754600092839260609290918683811061178157fe5b6000918252602091829020600460069092020101805460408051601f60026000196101006001871615020190941693909304928301859004850281018501909152818152919283919083018282801561181b5780601f106117f05761010080835404028352916020019161181b565b820191906000526020600020905b8154815290600101906020018083116117fe57829003601f168201915b505050505090509250925092509193909250565b60c0604051908101604052806000600160a060020a03168152602001606081526020016000815260200160608152602001606081526020016000151581525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106118b257805160ff19168380011785556118df565b828001600101855582156118df579182015b828111156118df5782518255916020019190600101906118c4565b506118eb9291506119ab565b5090565b50805460018160011615610100020316600290046000825580601f106119155750611933565b601f01602090049060005260206000209081019061193391906119ab565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061196f57805485556118df565b828001600101855582156118df57600052602060002091601f016020900482015b828111156118df578254825591600101919060010190611990565b610f9791905b808211156118eb57600081556001016119b15600a165627a7a72305820945068adbbe0af25b28150317c61a7c7bf0c57dbf91258fb7137a2e2066117cd0029"}; module.exports=contract;
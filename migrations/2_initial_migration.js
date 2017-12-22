var Ballot = artifact.require("./Ballot.sol");

module.exports = function(deployer, network, accounts) {
	if(network == "testrpc"){
		let proposals = ["Name1","Name2","Name3"];
		deployer.deploy(Ballot, proposals, {overwrite:false, from: accounts[0]});
	} else if(network == "rinkeby"){
		let proposals = ["voter1", "voter2", "voter3"];
		deployer.deploy(Ballot, proposals, {overwrite: false});
	}
}
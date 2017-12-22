var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Migrations);
	if(network == "testrpc"){
		deployer.deploy(Migrations, {overwrite:false, from: accounts[0]});
	}
};

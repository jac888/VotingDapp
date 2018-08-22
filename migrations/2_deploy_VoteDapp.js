const VotingDapp = artifacts.require("./VotingDapp.sol");

module.exports = function(deployer) {
  deployer.deploy(VotingDapp, ["john", "paul", "nancy", "joe", "jackson"]);
};

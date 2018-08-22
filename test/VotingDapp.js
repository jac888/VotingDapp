const VotingDapp = artifacts.require("./VotingDapp.sol");
require("chai").should();

contract("VotingDapp", accounts => {
  var votingInstance;
  var candidatesNumber = 3;
  it(`check if only ${candidatesNumber} candidate`, () => {
    return VotingDapp.deployed()
      .then(instance => {
        votingInstance = instance;
        return votingInstance.candidateCount();
      })
      .then(count => {
        assert.equal(
          count,
          candidatesNumber,
          `Candidates count is ${count} and candidate ${candidatesNumber} mismatch!`
        );
        return votingInstance.candidates(1).then(candidate => {
          var r0 = candidate[0].toString(10);
          var r2 = candidate[2].toString(10);
          console.log(r0);
          console.log(candidate[1]);
          console.log(r2);
        });
      });
  });
});

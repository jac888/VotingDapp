pragma solidity ^0.4.24;


contract VotingDapp {
    //setup model for candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    //set a candidate
    //get a candidate notice in solidity mapping size is unknown, cant iterate either. 
    mapping(uint => Candidate) public candidates;
    //set candidates count
    uint public candidateCount;

    //constructor
    constructor (bytes32[] _candidateList) public {
        // for (var i = 0; i < _candidateList.length; i++) {
        //     addCandidate(_candidateList[i]);
        // }
        addCandidate("candidate_one");
        addCandidate("candidate_two");
    }

    function addCandidate(string _name) private {
        candidateCount++ ;
        candidates[candidateCount] = Candidate(candidateCount, _name, 0);
    }
}

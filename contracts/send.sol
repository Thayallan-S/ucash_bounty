pragma solidity ^0.4.24;
import "./UCASH.sol";

contract Send is TESTUCASH{
    uint numberOfResponses;
    struct user {
        address respondant;
        bool approval;
    }
    struct question {
        string contents;
        uint[] response;
        uint bounty;
        address[] respondedAddress;
    }
    mapping(address => user) public users;
    mapping(address => question) public questions;
    mapping(uint => string) totalResponses;
    mapping(uint => address) totalAddresses;
    address[] public addresses;
    address manager;
    constructor() {
        manager = msg.sender;
    }
    function returnMsg() view public returns(address) {
        return(msg.sender);
    }
    modifier onlyBy() {
        require(
            msg.sender == manager,
            "Sender not authorized."
        );
        _;
    }
    function returnAllAddresses() view public returns(address[]) {
        return addresses;
    }
    function postQuestion(address _address, string _question, uint _bounty) {
        addresses.push(_address) -1;
        questions[_address].contents = _question;
        questions[_address].bounty = _bounty;
    }
    function respondToQuestion(string _response, address _questionAddress) {
        numberOfResponses += 1;
        totalAddresses[numberOfResponses] = msg.sender;
        totalResponses[numberOfResponses] = _response;
        questions[_questionAddress].response.push(numberOfResponses) -1;
        questions[_questionAddress].respondedAddress.push(msg.sender) -1;
    }
    function returnAllBounties(address _address) view public returns(string, uint) {
        return (questions[_address].contents, questions[_address].bounty);
    }
    function searchResponsePerQuestion() view public returns(uint[]){
        return (questions[msg.sender].response);
    }
    function searchResponseByNumber(uint _responseNumber) view public returns(string, address) {
        return(totalResponses[_responseNumber], totalAddresses[_responseNumber]);
    }
    function approveOfResponse(bool approval, address _selectedAddress) {
        if(approval == true) {
            TESTUCASH.transfer(_selectedAddress, questions[msg.sender].bounty);
        }
    }
}


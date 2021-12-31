//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
contract KycContract {
    mapping(address => bool) allowed;

    function setKycCompleted(address _addr) public {
        allowed[_addr] = true;
    }

    function setKycRevoked(address _addr) public {
        allowed[_addr] = false;
    }

    function kycCompleted(address _addr) public view returns(bool){
        return allowed[_addr];
    }


}
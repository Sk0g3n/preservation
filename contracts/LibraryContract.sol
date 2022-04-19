// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

contract LibraryContract {

  // stores a timestamp 
  uint storedTime;  

  function setTime(uint _time) public {
    storedTime = _time;
  }
}
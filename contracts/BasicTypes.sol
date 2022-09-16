// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract BasicTypes {

  bool public booleano;

  constructor() {
    booleano = true;
  }

  function getBoolean() public view returns(bool){
    return booleano;
  }

}

// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract DataTypes {

  bool private booleano;

  constructor() {
    booleano = true;
  }

  // TODO Implement a public function with name getBooleanFromStateVariable()
  //      that return a true value from state variable
  function getBooleanFromStateVariable() public view returns(bool){
    return booleano;
  }

  // TODO Implement a public function with name getSum(x,y)
  //      that returns the result of the sum of two numbers


  // TODO Implement a public function with name getPi()
  //      that return the value of PI (π) = 3.1415
  // INFO The value of PI never changes

  // TODO Implement a public function with name calculateCircleArea(radius)
  //      that return the result of circle area
  // INFO Reuse PI

  // TODO Implement a public function with name generateInstitutionalEmail(name)
  //      that return the result of the concatenation of the name separated by dots and in lowercase ignoring the accents
  // INFO The institution is called "Valle Grande" and the email domain is "vallegrande.edu.pe"
  // INFO Example: generateInstitutionalEmail("Pepito Pérez") that return "pepito.perez@vallegrande.edu.pe"


}

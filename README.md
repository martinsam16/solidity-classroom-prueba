# Solidity exercices
>An exercise template for github classroom

The idea of this template is to be able to automate the revision of the exercises created for the classes through the execution of unit tests.

## Steps

1. Review the TODO tree
2. Implement the request
3. Run the tests

Each subject has a test suite that the student must complete with all the tests passed. Based on the number of tests passed. the teacher must calculate a final grade.

*The wonderful thing about this methodology is that the student is free to use its logic so that the test passes, in addition to practicing it frees its creativity and reinforces learning.*

## Example

### 1.  Review the TODO tree

```solidity
contract DataTypes {

  // TODO Implement a public function with name getBooleanFromStateVariable()
  //      that return a true value from state variable

}
```

### 2. Implement the request

```solidity
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
}
```

### 3. Run the tests

> Note: The tests are defined by the teacher, the student only executes them

```js
const DataTypes = artifacts.require("DataTypes");

contract("DataTypes", function (/* accounts */) {
  it("should assert true", async function () {
    const instance = await DataTypes.deployed();

    const booleano = await instance.getBooleanFromStateVariable();

    return assert.isTrue(booleano);
  });
});

```

In this case, the following commands must be executed:

```bash
# We build our local blockchain (we only run it once)
npm run ganache

npm run test
```

Output

```bash
  Contract: BasicTypes
    ✔ should assert true

  1 passing (133ms)
```


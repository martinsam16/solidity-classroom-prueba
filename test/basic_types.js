const BasicTypes = artifacts.require("BasicTypes");


contract("BasicTypes", function (/* accounts */) {

  it("should assert true", async function () {
    const instance = await BasicTypes.deployed();

    const booleano = await instance.getBooleanFromStateVariable();

    return assert.isTrue(booleano);
  });

  it("should return the value of sum", async function(){
    const instance = await BasicTypes.deployed();
    
    const x = 1;
    const y = 5;
    const expected = x + y;

    const obtained = await instance.getSum(x, y);

    return assert.equal(expected, obtained);
  });

  it("should return the value of PI", async function(){
    const instance = await BasicTypes.deployed();

    const expected = 3.1415 * 1_0000;

    const obtained = await instance.getPi();

    return assert.equal(expected, obtained);
  });



});

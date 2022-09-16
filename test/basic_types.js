const BasicTypes = artifacts.require("BasicTypes");


contract("BasicTypes", function (/* accounts */) {

  it("should assert true", async function () {
    const instance = await BasicTypes.deployed();

    const booleano = await instance.getBoolean();

    return assert.isTrue(booleano);
  });


});

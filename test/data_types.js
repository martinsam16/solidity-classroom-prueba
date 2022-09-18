const DataTypes = artifacts.require("DataTypes");


contract("DataTypes", function (/* accounts */) {

  it("should assert true", async function () {
    const instance = await DataTypes.deployed();

    const booleano = await instance.getBooleanFromStateVariable();

    return assert.isTrue(booleano);
  });

  it("should return the value of sum", async function () {
    const instance = await DataTypes.deployed();

    const x = 1;
    const y = 5;
    const expected = x + y;

    const obtained = await instance.getSum(x, y);

    return assert.equal(expected, obtained);
  });

  it("should return the value of PI", async function () {
    const instance = await DataTypes.deployed();

    const expected = 3.1415 * 1_0000;

    const obtained = await instance.getPi();

    return assert.equal(expected, obtained);
  });

  it("should return the value of circle area", async function () {
    const instance = await DataTypes.deployed();

    const PI_NUMBER = 3.1415;
    const RADIUS = 3;
    const expected = (PI_NUMBER * Math.pow(RADIUS, 2)) * 1_0000;

    const obtained = await instance.calculateCircleArea(RADIUS);

    return assert.equal(expected, obtained);
  });

  it("should return the institutional email from a name", async function () {
    const instance = await DataTypes.deployed();

    const name = "Demócrito Smith";
    const expected = "democrito.smith@vallegrande.edu.pe";

    const obtained = await instance.generateInstitutionalEmail(name);

    return assert.equal(expected, obtained);
  });

  it("should return the data user stored", async function () {
    const instance = await DataTypes.deployed();

    const address = "0xb7cE2715e3383Fb8bc7591dDc5130f864a8E4Fe6";
    const expected = {
      name: "Demócrito Smith",
      email: "democrito.smith@vallegrande.edu.pe",
      status: "ACTIVE"
    };

    await instance.saveUserInfo(address, "Demócrito Smith");

    const obtained = await instance.retrieveUserInfo(address);

    return assert.equal(expected, obtained);
  });

});

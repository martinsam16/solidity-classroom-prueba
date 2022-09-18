var DataTypes = artifacts.require("DataTypes");

module.exports = function(_deployer) {
  _deployer.deploy(DataTypes);
};

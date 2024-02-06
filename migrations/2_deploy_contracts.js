const Ebook = artifacts.require("Ebook");

module.exports = function(deployer) {
  deployer.deploy(Ebook);
};
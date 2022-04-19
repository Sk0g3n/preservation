// *test code* const Elevator = artifacts.require("Elevator");
const LibraryContract = artifacts.require('LibraryContract');
const Preservation = artifacts.require('Preservation');
const Hack = artifacts.require('Hack');

module.exports = function (deployer, network, accounts) {
  //deployer.deploy(LibraryContract).then(() => deployer.deploy(Preservation, LibraryContract.address, LibraryContract.address));
  deployer.deploy(Hack);
  
};

const LibraryContract = artifacts.require('LibraryContract');
const Preservation = artifacts.require('Preservation');
const Hack = artifacts.require('Hack');

module.exports = async (deployer, network, acounts) => {
    const librarycontract = await LibraryContract.new();
    LibraryContract.setAsDeployed(librarycontract);
    
    const preservation = await Preservation.new(librarycontract.address, librarycontract.address);
    Preservation.setAsDeployed(preservation);

    const hack = await Hack.new();
    Hack.setAsDeployed(hack);

}
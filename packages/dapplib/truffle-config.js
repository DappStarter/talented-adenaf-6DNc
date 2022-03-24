require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain clutch grace indoor flower gaze'; 
let testAccounts = [
"0x515fc2b2560024ca84b102fee86fae1dc5c0b8d37b4a8dae2ee51d6b4e4efa27",
"0xda9bb3ef697f96233bdfffc9668198c07f2a0d6755192744ac5f4acb5aeffd57",
"0x6a98a5e744fd2feae4cf91039950921b7d72c9b32689ba4e520a710f9ff9f8c9",
"0xc24b2369d5764d0032973e2acb59d53bacc0b7b7fc3755335b117496f2fe62e2",
"0x88ab02a9b3edee28efc5692db301590d28d42e9f592ccce6ee8ba702ff5b8d6e",
"0x26055fb67152250e57d00fcef8eb76da143e8bc2d0982c23855647954078be79",
"0xface10c9cb10b80199b57037b3f397fd7d10050acf5937202afa3e0161739406",
"0x1b346702248cc4044a3095d532b14b19ade6c849c480195950e34f49fde0cd3d",
"0x86480c9c1f32eca5d9116980e8272136e9cc68d70a2dd296348749be703ff1ec",
"0x7859dbbaa743ab62146355038d03e7c09cd85052aa507b9db6ccad1e6b855dc9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


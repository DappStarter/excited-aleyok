require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace seek surge trip film birth mad million just kitten slot gate'; 
let testAccounts = [
"0xa7e17b43558b0afe4e638900173b6362420007ac406bf52b36d985f91ff377d0",
"0x034941d46259cda5c46f92257fa417f19572f28ae30048c70b421ba33f590fe4",
"0x1a90d450de9313833f91b4750e9672fa9a1d339dd1013465a25965147d98c333",
"0x17a185a6d43b51030a134bc0286a2e7322a44deb15c6d61d362b8ad5299ae08e",
"0x46bbcc1a5cdb3c9b2444c8b3fd3a318e225bb4b2335b47f61243d66273e59287",
"0xe0e7a1838dbdf49e0969b9dff3358f0ef0d7dde21a372dcc751133c07eb4bd08",
"0x8c06e205215d29193ad170a5f25e23d04a2daa81c283bbd9f7c4917713471ef9",
"0x08621d3d8091350b4dc141359bfafec9d3aa02604c4d613909df44a521d6715b",
"0x798bed310319ec00a7b7c65286d25d6934e7a82034776dafc739967ec22f5105",
"0xe3ab703184cdd2c8190c4d27cb80716ee939e817ed53038e055705d2f6eeb1f0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


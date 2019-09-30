require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraProjectId = process.env.INFURA_PROJECT_ID;

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 7545,
      gas: 6721975,
      gasPrice: 5e9,
      networkId: '*',
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://ropsten.infura.io/v3/" + infuraProjectId),
      networkId: 3,       // Ropsten's id
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://kovan.infura.io/v3/" + infuraProjectId),
      networkId: 42,       // Kovan's id
    },
  },
};

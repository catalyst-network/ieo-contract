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
    mainnet: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://mainnet.infura.io/v3/" + infuraProjectId),
      networkId: 1,       // Mainnet's id
    },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://ropsten.infura.io/v3/" + infuraProjectId),
      networkId: 3,       // Ropsten's id
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://kovan.infura.io/v3/" + infuraProjectId),
      networkId: 42,       // Kovan's id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(process.env.DEV_MNEMONIC, "https://rinkeby.infura.io/v3/" + infuraProjectId),
      networkId: 4,       // Rinkeby's id
    },
  },
};

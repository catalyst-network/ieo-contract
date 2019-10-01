## Install

First, install [Node.js](http://nodejs.org/) and [npm](https://npmjs.com/).
Then, install the OpenZeppelin SDK running:

```sh
npm install --global @openzeppelin/cli
```

Clone this repo and run:

```sh
npm install
```

#Usage

Add .env file containing an infura project id and the mnemonic of the wallet you wish to deploy the contract from. If not using a local testnet make sure this wallet contains enough ETH to cover deploying the conract.

```sh
INFURA_PROJECT_ID=
DEV_MNEMONIC=
```

Get the first address for the provided mnemonic by running:

```sh
oz accounts
```

then select which network you want to deploy to,

To deploy a token run:

```sh
oz create
```

select @openzeppelin/contracts-ethereum-package/StandaloneERC20 and follow the steps to create a contract instance. 

```sh
$ oz create
? Pick a contract to instantiate: @openzeppelin/contracts-ethereum-package/StandaloneERC20
? Pick a network: development
✓ Deploying @openzeppelin/contracts-ethereum-package dependency to network
? Do you want to call a function on the instance after creating it?: Yes
? Select which function: * initialize(name: string, symbol: string, decimals: uint8, initialSupply: uint256, initialHolder: address, minters: address[], pausers: address[])
? name (string): MyToken
? symbol (string): MYT
? decimals (uint8): 18
? initialSupply (uint256): 100e18
? initialHolder (address): 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
? minters (address[]):
? pausers (address[]):
✓ Setting everything up to create contract instances
✓ Instance created at 0x2612Af3A521c2df9EAF28422Ca335b04AdF3ac66
```

Check if the initial supply was allocated by running:

```sh
$ oz balance --erc20 0x2612Af3A521c2df9EAF28422Ca335b04AdF3ac66
? Enter an address to query its balance: 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
? Pick a network: development
Balance: 100 MYT
```
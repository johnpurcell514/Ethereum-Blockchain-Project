const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
require("dotenv").config({path: "./.env"});
const MNEMONIC = "height bomb remember accuse thing sample extend heavy lucky pistol that economy";
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777
    },
    goerli_infura: {
      provider: function() {
        return new HDWalletProvider(process.env[MNEMONIC], "https://goerli.infura.io/v3/01c9700b74034eafae7e74275263a3c4", AccountIndex)
      },
      network_id: 5
    },
    ropsten_infura: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/v3/01c9700b74034eafae7e74275263a3c4", AccountIndex)
      },
      network_id: 3
    },
    rinkeby_infura: {
      provider: function() {
        console.log(MNEMONIC);
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/01c9700b74034eafae7e74275263a3c4", AccountIndex)
      },
      network_id: 4
    }
  },
  compilers: {    
      solc: {
      version: "^0.8.0"
      }
  }
};

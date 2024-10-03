require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      blockGasLimit: 10000000,  // Modify block size
      mining: {
        auto: false,
        interval: [5000, 15000]  // Set block creation frequency (5-15 seconds)
      }
    }
  }
};

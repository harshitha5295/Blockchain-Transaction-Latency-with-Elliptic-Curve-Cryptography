const { ethers } = require("hardhat");

async function main() {
    // Get the deployer account
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // Get the contract factory for IdentityManagement
    const IdentityManagement = await ethers.getContractFactory("IdentityManagement");

    // Deploy the contract
    const identityManagement = await IdentityManagement.deploy();
    
    // Wait for the contract to be deployed
    await identityManagement.deployTransaction.wait(); // Wait for the transaction to be mined

    // Log the address of the deployed contract
    console.log("Contract deployed to:", identityManagement.address);
}

// Execute the main function and catch any errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

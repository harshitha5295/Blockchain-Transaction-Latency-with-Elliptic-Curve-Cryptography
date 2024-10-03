async function main() {
    const [deployer, user1] = await ethers.getSigners();
    const IdentityManagement = await ethers.getContractFactory("IdentityManagement");
    const identityManagement = await IdentityManagement.attach("<deployed_contract_address>");

    // Measure Transaction Latency
    await measureLatency(identityManagement, user1);

    // Fetch and log the registered identity
    const identity = await identityManagement.getIdentity(user1.address);
    console.log("Fetched Identity:", identity);
}

async function measureLatency(identityManagement, user1) {
    const startTime = Date.now();  // Start time tracking
    const publicKeyUser1 = ethers.utils.formatBytes32String("User1ECCPublicKey");

    const tx = await identityManagement.connect(user1).registerIdentity("Alice", publicKeyUser1);
    await tx.wait();  // Wait for the transaction to be mined

    const endTime = Date.now();  // End time tracking
    const latency = endTime - startTime;  // Calculate latency
    console.log(`Transaction Latency: ${latency} ms`);  // Log latency
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

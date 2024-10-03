// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract IdentityManagement {
    struct Identity {
        address userAddress;
        string userName;
        bytes32 publicKey;  // ECC public key stored on-chain
    }

    mapping(address => Identity) public identities;

    function registerIdentity(string memory _userName, bytes32 _publicKey) public {
        identities[msg.sender] = Identity(msg.sender, _userName, _publicKey);
    }

    function getIdentity(address _user) public view returns (Identity memory) {
        return identities[_user];
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title ResearchSummary - Stores AI-generated summaries of whitepapers onchain
contract ResearchSummary {
    event SummaryAdded(uint indexed paperId, address indexed submittedBy, string ipfsHash);

    struct Summary {
        string ipfsHash; // IPFS or Arweave link to full summary
        address submittedBy;
        uint timestamp;
    }

    mapping(uint => Summary) public summaries; // paperId => Summary

    /// @notice Submit AI-generated summary for a given paperId
    function submitSummary(uint paperId, string memory ipfsHash) external {
        summaries[paperId] = Summary(ipfsHash, msg.sender, block.timestamp);
        emit SummaryAdded(paperId, msg.sender, ipfsHash);
    }

    /// @notice Get summary data by paper ID
    function getSummary(uint paperId) external view returns (Summary memory) {
        return summaries[paperId];
    }
}
 
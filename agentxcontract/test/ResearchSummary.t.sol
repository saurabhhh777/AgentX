// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/ResearchSummary.sol";

contract ResearchSummaryTest is Test {
    ResearchSummary public rs;

    function setUp() public {
        rs = new ResearchSummary();
    }

    function testSubmitAndGetSummary() public {
        rs.submitSummary(1, "ipfs://abc123");
        ResearchSummary.Summary memory s = rs.getSummary(1);
        assertEq(s.ipfsHash, "ipfs://abc123");
        assertEq(s.submittedBy, address(this));
    }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICurvePool {
    // Function declarations for interacting with the Curve pool
    function exchange(
        address fromToken,
        address toToken,
        uint256 fromAmount,
        uint256 minToAmount
    ) external returns (uint256);

    // Other function declarations for deposit, withdraw, get pool info, etc.
}

pragma solidity ^0.8.0;

import "../token/ERC20/ModelToken.sol";
import "../interfaces/ILendingPool.sol";

contract AaveIntegration {
    ILendingPool public lendingPool;
    ModelToken public token;

    constructor(address _lendingPoolAddress, address _tokenAddress) {
        lendingPool = ILendingPool(_lendingPoolAddress);
        token = ModelToken(_tokenAddress);
    }

    function deposit(uint256 amount) external {
        token.transferFrom(msg.sender, address(this), amount);
        token.approve(address(lendingPool), amount);
        lendingPool.deposit(address(token), amount, msg.sender, 0);
    }
}

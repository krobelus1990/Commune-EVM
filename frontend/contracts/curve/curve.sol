pragma solidity ^0.8.0;

import "../token/ERC20/ModelToken.sol";
import "../interfaces/ICurvePool.sol";

contract CurveIntegration {
    ICurvePool public curvePool;
    ModelToken public token;

    constructor(address _curvePoolAddress, address _tokenAddress) {
        curvePool = ICurvePool(_curvePoolAddress);
        token = ModelToken(_tokenAddress);
    }

    function exchange(address i, address j, uint256 dx, uint256 min_dy) external {
        token.transferFrom(msg.sender, address(this), dx);
        token.approve(address(curvePool), dx);
        curvePool.exchange(i, j, dx, min_dy);
    }
}

pragma solidity ^0.8.0;

import "../token/ERC20/ModelToken.sol";
import "../interfaces/IUniswapV2Router02.sol";

contract UniswapIntegration {
    IUniswapV2Router02 public uniswapRouter;
    ModelToken public token;

    constructor(address _routerAddress, address _tokenAddress) {
        uniswapRouter = IUniswapV2Router02(_routerAddress);
        token = ModelToken(_tokenAddress);
    }

    function swapTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path
    ) external {
        token.transferFrom(msg.sender, address(this), amountIn);
        token.approve(address(uniswapRouter), amountIn);
        uniswapRouter.swapExactTokensForTokens(
            amountIn,
            amountOutMin,
            path,
            msg.sender,
            block.timestamp + 1000
        );
    }
}

pragma solidity ^0.8.0;

import "../token/ERC20/ModelToken.sol";
import "../interfaces/Daijoin.sol";

contract MakerDAOIntegration {
    DaiJoin public daiJoin;
    ModelToken public token;

    constructor(address _daiJoinAddress, address _tokenAddress) {
        daiJoin = DaiJoin(_daiJoinAddress);
        token = ModelToken(_tokenAddress);
    }

    function lockETH(uint256 amount) external {
        token.transferFrom(msg.sender, address(this), amount);
        token.approve(address(daiJoin), amount);
        daiJoin.join(address(this), amount);
    }
}

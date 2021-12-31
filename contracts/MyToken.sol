//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Billy Bucks", "BB") public {
        _mint(msg.sender, initialSupply);
        decimals();
    }
    function decimals() public view override returns (uint8) { 
        return 0; 
    }
}
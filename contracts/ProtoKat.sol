pragma solidity 0.5.11;

import 'node_modules/@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Detailed.sol';
import 'node_modules/@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Capped.sol';

/**
 * @title ProtoKat ERC20 Token Contract
 * @author Catalyst Network
 *
 * @dev Implementation of the ProtoKat token.
 *      ProtoKat is an ERC20 token
 */

contract ProtoKat is Initializable, ERC20Detailed, ERC20Capped {
    function initialize(
        string memory name, string memory symbol, uint8 decimals, uint256 cap, uint256 initialSupply, address initialHolder,
        address[] memory minters
    ) public initializer {
        ERC20Detailed.initialize(name, symbol, decimals);

        // Initialize the minter role, and renounce them
        ERC20Capped.initialize(cap, address(this));
        _removeMinter(address(this));

        // Mint the initial supply
        _mint(initialHolder, initialSupply);

        // Add the requested minters (this can be done after renouncing since
        // these are the internal calls)
        for (uint256 i = 0; i < minters.length; ++i) {
            _addMinter(minters[i]);
        }
    }
}
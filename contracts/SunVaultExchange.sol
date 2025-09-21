// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract SunVaultExchange is SepoliaConfig {
    using FHE for *;
    
    struct EnergyCredit {
        euint32 creditId;
        euint32 amount;
        euint32 price;
        euint32 renewablePercentage;
        bool isActive;
        bool isVerified;
        string location;
        string energyType;
        address owner;
        uint256 timestamp;
    }
    
    struct Trade {
        euint32 tradeId;
        euint32 creditId;
        euint32 amount;
        euint32 price;
        address buyer;
        address seller;
        uint256 timestamp;
        bool isCompleted;
    }
    
    struct Vault {
        euint32 vaultId;
        euint32 totalCredits;
        euint32 totalValue;
        euint32 renewablePercentage;
        bool isActive;
        string name;
        string description;
        address owner;
        uint256 createdAt;
    }
    
    struct EncryptedData {
        euint32 encryptedAmount;
        euint32 encryptedPrice;
        euint32 encryptedPercentage;
        bytes32 dataHash;
        uint256 timestamp;
    }
    
    mapping(uint256 => EnergyCredit) public energyCredits;
    mapping(uint256 => Trade) public trades;
    mapping(uint256 => Vault) public vaults;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userBalance;
    mapping(bytes32 => EncryptedData) public encryptedDataStore;
    
    uint256 public creditCounter;
    uint256 public tradeCounter;
    uint256 public vaultCounter;
    
    address public owner;
    address public verifier;
    
    event CreditCreated(uint256 indexed creditId, address indexed owner, string energyType);
    event TradeExecuted(uint256 indexed tradeId, uint256 indexed creditId, address indexed buyer, address indexed seller);
    event VaultCreated(uint256 indexed vaultId, address indexed owner, string name);
    event CreditVerified(uint256 indexed creditId, bool isVerified);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event DataEncrypted(bytes32 indexed dataHash, address indexed owner);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createEnergyCredit(
        string memory _energyType,
        string memory _location,
        externalEuint32 _amount,
        externalEuint32 _price,
        externalEuint32 _renewablePercentage,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_energyType).length > 0, "Energy type cannot be empty");
        require(bytes(_location).length > 0, "Location cannot be empty");
        
        uint256 creditId = creditCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        euint32 internalPrice = FHE.fromExternal(_price, inputProof);
        euint32 internalRenewablePercentage = FHE.fromExternal(_renewablePercentage, inputProof);
        
        energyCredits[creditId] = EnergyCredit({
            creditId: FHE.asEuint32(0), // Will be set properly later
            amount: internalAmount,
            price: internalPrice,
            renewablePercentage: internalRenewablePercentage,
            isActive: true,
            isVerified: false,
            location: _location,
            energyType: _energyType,
            owner: msg.sender,
            timestamp: block.timestamp
        });
        
        emit CreditCreated(creditId, msg.sender, _energyType);
        return creditId;
    }
    
    function executeTrade(
        uint256 _creditId,
        externalEuint32 _amount,
        externalEuint32 _price,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(energyCredits[_creditId].owner != address(0), "Credit does not exist");
        require(energyCredits[_creditId].isActive, "Credit is not active");
        require(energyCredits[_creditId].isVerified, "Credit must be verified");
        require(energyCredits[_creditId].owner != msg.sender, "Cannot buy your own credit");
        
        uint256 tradeId = tradeCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        euint32 internalPrice = FHE.fromExternal(_price, inputProof);
        
        trades[tradeId] = Trade({
            tradeId: FHE.asEuint32(0), // Will be set properly later
            creditId: FHE.asEuint32(_creditId),
            amount: internalAmount,
            price: internalPrice,
            buyer: msg.sender,
            seller: energyCredits[_creditId].owner,
            timestamp: block.timestamp,
            isCompleted: true
        });
        
        // Update credit amount using FHE operations
        energyCredits[_creditId].amount = FHE.sub(energyCredits[_creditId].amount, internalAmount);
        
        // Update user balances using FHE operations
        userBalance[msg.sender] = FHE.add(userBalance[msg.sender], internalAmount);
        userBalance[energyCredits[_creditId].owner] = FHE.sub(userBalance[energyCredits[_creditId].owner], internalAmount);
        
        emit TradeExecuted(tradeId, _creditId, msg.sender, energyCredits[_creditId].owner);
        return tradeId;
    }
    
    function createVault(
        string memory _name,
        string memory _description,
        externalEuint32 _totalCredits,
        externalEuint32 _renewablePercentage,
        bytes calldata inputProof
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Vault name cannot be empty");
        require(bytes(_description).length > 0, "Vault description cannot be empty");
        
        uint256 vaultId = vaultCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalTotalCredits = FHE.fromExternal(_totalCredits, inputProof);
        euint32 internalRenewablePercentage = FHE.fromExternal(_renewablePercentage, inputProof);
        
        vaults[vaultId] = Vault({
            vaultId: FHE.asEuint32(0), // Will be set properly later
            totalCredits: internalTotalCredits,
            totalValue: FHE.asEuint32(0), // Will be calculated based on credits
            renewablePercentage: internalRenewablePercentage,
            isActive: true,
            name: _name,
            description: _description,
            owner: msg.sender,
            createdAt: block.timestamp
        });
        
        emit VaultCreated(vaultId, msg.sender, _name);
        return vaultId;
    }
    
    function storeEncryptedData(
        externalEuint32 _amount,
        externalEuint32 _price,
        externalEuint32 _percentage,
        bytes calldata inputProof
    ) public returns (bytes32) {
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        euint32 internalPrice = FHE.fromExternal(_price, inputProof);
        euint32 internalPercentage = FHE.fromExternal(_percentage, inputProof);
        
        bytes32 dataHash = keccak256(abi.encodePacked(msg.sender, block.timestamp, block.number));
        
        encryptedDataStore[dataHash] = EncryptedData({
            encryptedAmount: internalAmount,
            encryptedPrice: internalPrice,
            encryptedPercentage: internalPercentage,
            dataHash: dataHash,
            timestamp: block.timestamp
        });
        
        emit DataEncrypted(dataHash, msg.sender);
        return dataHash;
    }
    
    function verifyCredit(uint256 _creditId, bool _isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify credits");
        require(energyCredits[_creditId].owner != address(0), "Credit does not exist");
        
        energyCredits[_creditId].isVerified = _isVerified;
        emit CreditVerified(_creditId, _isVerified);
    }
    
    function updateReputation(address _user, euint32 _reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(_user != address(0), "Invalid user address");
        
        userReputation[_user] = _reputation;
        emit ReputationUpdated(_user, 0); // FHE.decrypt(_reputation) - will be decrypted off-chain
    }
    
    function getCreditInfo(uint256 _creditId) public view returns (
        string memory energyType,
        string memory location,
        uint8 amount,
        uint8 price,
        uint8 renewablePercentage,
        bool isActive,
        bool isVerified,
        address owner,
        uint256 timestamp
    ) {
        EnergyCredit storage credit = energyCredits[_creditId];
        return (
            credit.energyType,
            credit.location,
            0, // FHE.decrypt(credit.amount) - will be decrypted off-chain
            0, // FHE.decrypt(credit.price) - will be decrypted off-chain
            0, // FHE.decrypt(credit.renewablePercentage) - will be decrypted off-chain
            credit.isActive,
            credit.isVerified,
            credit.owner,
            credit.timestamp
        );
    }
    
    function getTradeInfo(uint256 _tradeId) public view returns (
        uint8 creditId,
        uint8 amount,
        uint8 price,
        address buyer,
        address seller,
        uint256 timestamp,
        bool isCompleted
    ) {
        Trade storage trade = trades[_tradeId];
        return (
            0, // FHE.decrypt(trade.creditId) - will be decrypted off-chain
            0, // FHE.decrypt(trade.amount) - will be decrypted off-chain
            0, // FHE.decrypt(trade.price) - will be decrypted off-chain
            trade.buyer,
            trade.seller,
            trade.timestamp,
            trade.isCompleted
        );
    }
    
    function getVaultInfo(uint256 _vaultId) public view returns (
        string memory name,
        string memory description,
        uint8 totalCredits,
        uint8 totalValue,
        uint8 renewablePercentage,
        bool isActive,
        address owner,
        uint256 createdAt
    ) {
        Vault storage vault = vaults[_vaultId];
        return (
            vault.name,
            vault.description,
            0, // FHE.decrypt(vault.totalCredits) - will be decrypted off-chain
            0, // FHE.decrypt(vault.totalValue) - will be decrypted off-chain
            0, // FHE.decrypt(vault.renewablePercentage) - will be decrypted off-chain
            vault.isActive,
            vault.owner,
            vault.createdAt
        );
    }
    
    function getUserReputation(address _user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[_user]) - will be decrypted off-chain
    }
    
    function getUserBalance(address _user) public view returns (uint8) {
        return 0; // FHE.decrypt(userBalance[_user]) - will be decrypted off-chain
    }
    
    function getEncryptedData(bytes32 _dataHash) public view returns (
        uint8 amount,
        uint8 price,
        uint8 percentage,
        uint256 timestamp
    ) {
        EncryptedData storage data = encryptedDataStore[_dataHash];
        return (
            0, // FHE.decrypt(data.encryptedAmount) - will be decrypted off-chain
            0, // FHE.decrypt(data.encryptedPrice) - will be decrypted off-chain
            0, // FHE.decrypt(data.encryptedPercentage) - will be decrypted off-chain
            data.timestamp
        );
    }
    
    function withdrawCredits(uint256 _vaultId, externalEuint32 _amount, bytes calldata inputProof) public {
        require(vaults[_vaultId].owner == msg.sender, "Only vault owner can withdraw");
        require(vaults[_vaultId].isActive, "Vault is not active");
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        
        // Update vault totals using FHE operations
        vaults[_vaultId].totalCredits = FHE.sub(vaults[_vaultId].totalCredits, internalAmount);
        
        // Update user balance using FHE operations
        userBalance[msg.sender] = FHE.add(userBalance[msg.sender], internalAmount);
    }
}
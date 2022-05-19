"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
//Block class
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//class method that generates block hash
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
//creating a block object
const genesisBlock = new Block(0, "293243123232", "", "Hello", 123456);
//block chain array made out of each block
let blockchain = [genesisBlock];
//a function that returns blockchain array in Block class
const getBlockchain = () => blockchain;
//in order to know the length of the blockchain. returns one block.
const getLatestBlock = () => blockchain[blockchain.length - 1];
//returns a number
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//# sourceMappingURL=index.js.map
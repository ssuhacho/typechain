import * as CryptoJS from "crypto-js";

//Block class
class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    //class method that generates block hash
    static calculateBlockHash = (
        index: number,
        previousHash: string,
        data: string,
        timestamp: number): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number
        ){
            this.index = index;
            this.hash = hash;
            this.previousHash = previousHash;
            this.data = data;
            this.timestamp = timestamp;
        }
}

//creating a block object
const genesisBlock:Block = new Block(0,"293243123232","","Hello",123456);

//block chain array made out of each block
let blockchain: Block[] = [genesisBlock];

//a function that returns blockchain array in Block class
const getBlockchain = () : Block[] => blockchain;

//in order to know the length of the blockchain. returns one block.
const getLatestBlock = () : Block => blockchain[blockchain.length -1];

//returns a number
const getNewTimeStamp = () : number => Math.round (new Date().getTime() / 1000);


export{};
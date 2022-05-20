import * as CryptoJS from "crypto-js";

//Block class
class Block {
  //class method that generates block hash
  static calculateBlockHash = (
    index: number,
    previousHash: string,
    data: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.data === "string" &&
    typeof aBlock.timestamp === "number";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

//creating a block object
const genesisBlock: Block = new Block(0, "293243123232", "", "Hello", 123456);

//block chain array made out of each block
let blockchain: Block[] = [genesisBlock];

//a function that returns blockchain array in Block class
const getBlockchain = (): Block[] => blockchain;

//in order to know the length of the blockchain. returns one block.
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

//returns a number
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

//creates new block
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    data,
    newTimestamp
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimestamp
  );
  return newBlock;
};


const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index){
      return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash){
      return false;
  }
};


export {};

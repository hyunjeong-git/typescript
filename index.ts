import crypto from "crypto";

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}
class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash:string,
        public height: number,
        public data:string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash('sha256').update(toHash).digest('hex');
    }
}

class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash() {
        if (this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data:string){
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        // 새로운 배열로 리턴
        return [...this.blocks];
    }
}

const blockChain = new Blockchain();
blockChain.addBlock('First one');
blockChain.addBlock('Second one');
blockChain.addBlock('Third one');


console.log(blockChain.getBlocks());
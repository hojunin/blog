import { BLOCK } from './../block';
export const isBlock = (block: unknown): block is BLOCK => {
    return (block as BLOCK).object === 'block';
};

export const isBlocks = (blocks: unknown[]): blocks is BLOCK[] => {
    return Array.isArray(blocks) && (blocks as BLOCK[]).every(isBlock);
};

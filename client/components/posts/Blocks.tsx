import React from 'react';
import { BLOCK } from '../../types/block';
import { isBlocks } from '../../types/typeGuards/block';
import Block from './Block';

interface BlocksProps {
    blocks: BLOCK[];
}

const Blocks = ({ blocks }: BlocksProps) => {
    if (isBlocks(blocks)) {
        return (
            <>
                {blocks.map((block) => (
                    <Block key={block.id} block={block} />
                ))}
            </>
        );
    }
    return <></>;
};

export default Blocks;

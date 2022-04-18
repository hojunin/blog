import React from 'react';
import { BLOCK } from '../../types/block';
import Block from './Block';

interface BlocksProps {
    blocks: BLOCK[];
}

const Blocks = ({ blocks }: BlocksProps) => {
    return (
        <>
            {blocks.map((block) => (
                <Block key={block.id} block={block} />
            ))}
        </>
    );
};

export default Blocks;

import React from 'react';
import { BLOCK } from '../../types/block';
import Callout from '../post/Callout';
import Divider from '../post/Divider';
import Paragraph from '../post/Paragraph';
import Table from '../post/Table';
import Toggle from '../post/Toggle';

interface BlockProps {
    block: BLOCK;
}

const Block = ({ block }: BlockProps) => {
    switch (block.type) {
        case 'divider':
            return <Divider />;
        case 'callout':
            return <Callout data={block.callout} />;
        case 'toggle':
            return <Toggle />;
        case 'table':
            return <Table />;
        case 'paragraph':
            return <Paragraph paragraph={block.paragraph} />;

        default:
            return <></>;
    }
};

export default Block;

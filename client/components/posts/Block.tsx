import React from 'react';
import { BLOCK } from '../../types/block';
import Callout from '../post/Callout';
import Divider from '../post/Divider';
import Paragraph from '../post/Paragraph';
import Table from '../post/Table';
import Toggle from '../post/Toggle';
import Blocks from './Blocks';

interface BlockProps {
    block: BLOCK;
}

// has_children인 객체들을 어떻게 처리할까 -> 서버에서 처리하는게 좋을듯
const Block = ({ block }: BlockProps) => {
    const BlockByType = () => {
        switch (block.type) {
            case 'divider':
                return <Divider />;
            case 'callout':
                return <Callout data={block.callout} />;
            case 'toggle':
                return <Toggle toggle={block.toggle} />;
            case 'table':
                return <Table />;
            case 'paragraph':
                return <Paragraph paragraph={block.paragraph} />;
            case 'column_list':
                return <Blocks blocks={[]} />;

            default:
                return <></>;
        }
    };

    return (
        <div className=" mb-10">
            <BlockByType />
        </div>
    );
};

export default Block;

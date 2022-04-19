import React from 'react';
import { BLOCK } from '../../types/block';
import Callout from '../post/Callout';
import Divider from '../post/Divider';
import Paragraph from '../post/Paragraph';
import Table from '../post/Table';
import Toggle from '../post/Toggle';
import Blocks from './Blocks';
import Image from '../post/Image';

interface BlockProps {
    block: BLOCK;
}

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
            case 'image':
                return <Image image={block.image} />;
            case 'column_list':
                // ? row 정렬한 container에 넣으면 될듯?
                return <Blocks blocks={block.childrens} />;

            default:
                return <></>;
        }
    };

    return (
        <div className=" mb-10">
            <BlockByType />
            {block.has_children && <Blocks blocks={block.childrens} />}
        </div>
    );
};

export default Block;

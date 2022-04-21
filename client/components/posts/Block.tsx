import React from 'react';
import { BLOCK } from '../../types/block';
import Callout from '../post/Callout';
import Divider from '../post/Divider';
import Paragraph from '../post/Paragraph';
import Table from '../post/Table';
import Toggle from '../post/Toggle';
import Blocks from './Blocks';
import Image from '../post/Image';
import Code from '../post/Code';
import Heading from '../post/Heading';
import RichTexts from '../post/RichTexts';

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
                const { results } = block.childrens;
                return (
                    <div className="flex flex-row h-20 bg-blue-50">
                        <Blocks blocks={results} />
                    </div>
                );
            case 'code':
                return <Code code={block.code} />;
            case 'heading_1':
                return <Heading heading={block.heading_1} headingSize={1} />;
            case 'heading_2':
                return <Heading heading={block.heading_2} headingSize={2} />;
            case 'heading_3':
                return <Heading heading={block.heading_3} headingSize={3} />;
            case 'bulleted_list_item':
                return <RichTexts rich_texts={block.bulleted_list_item?.rich_text} />;
            case 'numbered_list_item':
                return <RichTexts rich_texts={block.numbered_list_item?.rich_text} />;

            default:
                return <></>;
        }
    };

    const hasChildren = (block: unknown): block is BLOCK => {
        return (block as BLOCK).has_children && (block as BLOCK).childrens;
    };

    return (
        <div className=" mb-10">
            <BlockByType />
            {hasChildren(block) ? <Blocks blocks={block.childrens.results} /> : <></>}
        </div>
    );
};

export default Block;

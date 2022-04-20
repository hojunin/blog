import React from 'react';
import { PARAGRAPH } from '../../types/block';
import RichTexts from './RichTexts';

interface ParagraphProps {
    paragraph: PARAGRAPH;
}

const Paragraph = ({ paragraph }: ParagraphProps) => {
    return (
        <div>
            <RichTexts rich_texts={paragraph.rich_text} />
        </div>
    );
};

export default Paragraph;

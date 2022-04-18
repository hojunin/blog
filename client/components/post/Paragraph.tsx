import React from 'react';
import { PARAGRAPH } from '../../types/block';
import RichTexts from './RichTexts';

interface ParagraphProps {
    paragraph: PARAGRAPH;
}

const Paragraph = ({ paragraph }: ParagraphProps) => {
    console.log('🚀 ~ file: Paragraph.tsx ~ line 9 ~ Paragraph ~ paragraph', paragraph);
    return (
        <div>
            <RichTexts rich_texts={paragraph.rich_text} />
        </div>
    );
};

export default Paragraph;

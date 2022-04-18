import React from 'react';
import { RICH_TEXT } from '../../types/global';

interface RichTextProps {
    rich_text: RICH_TEXT;
}

const RichText = ({ rich_text }: RichTextProps) => {
    const { annotations, href, text, type, plain_text } = rich_text;
    const { bold, code, color, italic, underline, strikethrough } = annotations;

    return (
        <a
            href={href && href}
            className={`${italic && 'italic'} ${bold && 'font-bold'} ${annotations} ${underline && 'underline'} ${
                color !== 'default' && 'text-cyan-500'
            } ${strikethrough && 'line-through'}`}
        >
            {rich_text.plain_text}
        </a>
    );
};

export default RichText;

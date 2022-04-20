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
            className={` mr-1 ${italic && 'italic'} ${bold && 'font-bold'} ${annotations} ${underline && 'underline'} ${
                strikethrough && 'line-through'
            } text-${color}-300`}
        >
            {`${rich_text.plain_text}`}
        </a>
    );
};

export default RichText;

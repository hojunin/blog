import React from 'react';
import { RICH_TEXT } from '../../types/global';

interface RichTextProps {
    rich_text: RICH_TEXT;
}

const RichText = ({ rich_text }: RichTextProps) => {
    const { annotation, href, text, type, plain_text } = rich_text;

    return (
        <>
            <span className="bg-lime-400">{rich_text.plain_text}</span>
        </>
    );
};

export default RichText;

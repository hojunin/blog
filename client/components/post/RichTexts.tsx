import React from 'react';
import { RICH_TEXT } from '../../types/global';
import RichText from './RichText';

interface RichTextsProps {
    rich_texts: RICH_TEXT[];
}

const RichTexts = ({ rich_texts }: RichTextsProps) => {
    return (
        <>
            {rich_texts.map((rich_text, index) => (
                <RichText key={index.toString()} rich_text={rich_text} />
            ))}
        </>
    );
};

export default RichTexts;

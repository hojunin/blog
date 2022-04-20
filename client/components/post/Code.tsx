import React from 'react';
import { CODE } from '../../types/block';
import HightLight from 'react-highlight';

import RichTexts from './RichTexts';
interface CodeProps {
    code: CODE;
}
const Code = ({ code }: CodeProps) => {
    return (
        <HightLight className=" rounded-md p-8 text-sm">
            <RichTexts rich_texts={code.rich_text} />
        </HightLight>
    );
};

export default Code;

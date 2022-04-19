import React from 'react';
import { CALLOUT } from '../../types/block';
import Icon from './Icon';
import RichTexts from './RichTexts';

interface CalloutProps {
    data: CALLOUT;
}

const Callout = ({ data }: CalloutProps) => {
    return (
        <div className="bg-slate-300 p-10 caret-lime-400 rounded-md flex-row">
            <Icon icon={data.icon} />
            <RichTexts rich_texts={data.rich_text} />
        </div>
    );
};

export default Callout;

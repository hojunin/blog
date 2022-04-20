import React from 'react';
import { CALLOUT } from '../../types/block';
import Icon from './Icon';
import RichTexts from './RichTexts';

interface CalloutProps {
    data: CALLOUT;
}

const Callout = ({ data }: CalloutProps) => {
    return (
        <div className="bg-slate-300 p-10 rounded-md flex-row flex">
            <div className="mr-3">
                <Icon icon={data.icon} />
            </div>
            <RichTexts rich_texts={data.rich_text} />
        </div>
    );
};

export default Callout;

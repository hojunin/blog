import React from 'react';
import { CALLOUT } from '../../types/block';
import Icon from './Icon';
import RichText from './RichText';

interface CalloutProps {
    data: CALLOUT;
}

const Callout = ({ data }: CalloutProps) => {
    return (
        <div className="bg-slate-500 p-10 caret-lime-400 rounded-md flex-row">
            <Icon icon={data.icon} />
            <RichText data={data.rich_text} />
        </div>
    );
};

export default Callout;

import React from 'react';
import { RICH_TEXT } from '../../types/global';

interface RichTextProps {
    data: RICH_TEXT[];
}

const RichText = ({ data }: RichTextProps) => {
    return (
        <>
            {data.map((datum, index) => (
                <span className=" bg-lime-400" key={index.toString()}>
                    {datum.plain_text}
                </span>
            ))}
        </>
    );
};

export default RichText;

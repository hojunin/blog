import React from 'react';
import { HEADING } from '../../types/block';
import RichTexts from './RichTexts';

interface HeadingProps {
    heading: HEADING;
    headingSize: 1 | 2 | 3;
}

const Heading = ({ heading, headingSize }: HeadingProps) => {
    const getHeadingStyle = () => {
        switch (headingSize) {
            case 1:
                return 'text-6xl';
            case 2:
                return 'text-4xl';
            case 3:
                return 'text-2xl';
            default:
        }
    };
    return (
        <span className={`${getHeadingStyle()}`}>
            <RichTexts rich_texts={heading.rich_text} />
        </span>
    );
};

export default Heading;

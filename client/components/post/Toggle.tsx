import React from 'react';
import { TOGGLE } from '../../types/block';
import RichTexts from './RichTexts';

interface ToggleProps {
    toggle: TOGGLE;
}

const Toggle = ({ toggle }: ToggleProps) => {
    return (
        <>
            <RichTexts rich_texts={toggle.rich_text} />
        </>
    );
};

export default Toggle;

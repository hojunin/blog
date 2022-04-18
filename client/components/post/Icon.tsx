import React from 'react';
import { ICON } from '../../types/global';

interface IconProps {
    icon: ICON;
}

const Icon = ({ icon }: IconProps) => {
    return <div>{icon.emoji}</div>;
};

export default Icon;

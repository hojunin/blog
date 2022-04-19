import React from 'react';
import { IMAGE } from '../../types/block';

interface ImageProps {
    image: IMAGE;
}

const Image = ({ image }: ImageProps) => {
    const { file } = image;
    return <img className="rounded-md flex-1 w-2/6" src={file.url} alt="image" />;
};

export default Image;

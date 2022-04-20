import React from 'react';
import { IMAGE } from '../../types/block';

interface ImageProps {
    image: IMAGE;
}

const Image = ({ image }: ImageProps) => {
    const { file } = image;
    return (
        <div className="flex flex-1 justify-center">
            <img className="rounded-md w-2/6 self-center" src={file.url} alt="image" />
        </div>
    );
};

export default Image;

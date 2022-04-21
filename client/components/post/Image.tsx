import React from 'react';
import { IMAGE } from '../../types/block';

interface ImageProps {
    image: IMAGE;
}

const Image = ({ image }: ImageProps) => {
    const { file, external } = image;
    const getUrl = () => {
        if (file) {
            return file?.url;
        }
        return external?.url;
    };
    return (
        <div className="flex flex-1 justify-center cursor-pointer">
            <img
                className="rounded-md w-3/6 self-center hover:border-2 hover:border-orange-400"
                src={getUrl()}
                alt="image"
            />
        </div>
    );
};

export default Image;

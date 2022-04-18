import axios from 'axios';
import { useEffect, useState } from 'react';
import Block from '../components/posts/Block';
import { BLOCK } from '../types/block';

const Posts = () => {
    const [blocks, setBlocks] = useState<BLOCK[]>([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/page');
        setBlocks(response.data.results);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {blocks.map((block) => (
                <Block key={block.id} block={block} />
            ))}
        </>
    );
};

export default Posts;

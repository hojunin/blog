import axios from 'axios';
import { useEffect, useState } from 'react';
import Blocks from '../components/posts/Blocks';
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

    return <Blocks blocks={blocks} />;
};

export default Posts;

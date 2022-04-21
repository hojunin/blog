import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Blocks from '../components/posts/Blocks';
import { BLOCK } from '../types/block';

const Posts = () => {
    const router = useRouter();
    console.log('ID : ', router.query.page_id);
    const [blocks, setBlocks] = useState<BLOCK[]>([]);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/page?page_id=${router.query.page_id}`);
        setBlocks(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    if (!blocks) return <></>;

    return (
        <div className="flex-1">
            <Blocks blocks={blocks} />
        </div>
    );
};

export default Posts;

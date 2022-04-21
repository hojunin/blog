import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import RichTexts from '../components/post/RichTexts';
import { POST, POST_LIST } from '../types/post';

function Post() {
    const [data, setData] = useState<POST[]>([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/db');
        setData(response.data.results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!data) return <></>;

    return (
        <>
            <h1 className="bg-red-700">Post</h1>
            {data.map((datum) => {
                if (!datum?.properties) return <></>;
                const { name, publishedAt, status } = datum?.properties;

                return (
                    <div className="flex flex-row items-center p-5" key={datum.id}>
                        <div className=" text-5xl">
                            <RichTexts rich_texts={name.title} />
                        </div>
                        <h2>{dayjs(publishedAt.date?.start).format('YYYY년 MM월 DD일')}</h2>
                    </div>
                );
            })}
        </>
    );
}

export default Post;

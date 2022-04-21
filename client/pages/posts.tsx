import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import RichTexts from '../components/post/RichTexts';
import { POST } from '../types/post';
import { useRouter } from 'next/router';

function Post() {
    const router = useRouter();
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
            {data.map((datum) => {
                if (!datum?.properties) return <></>;
                const { name, publishedAt } = datum?.properties;

                return (
                    <div
                        className="flex flex-row items-center p-3 mb-5 border-2 rounded-md hover:border-orange-300 cursor-pointer justify-between"
                        key={datum.id}
                        onClick={() => {
                            router.push({
                                pathname: '/post',
                                query: {
                                    page_id: datum.id,
                                },
                            });
                        }}
                    >
                        <div className=" text-3xl">
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

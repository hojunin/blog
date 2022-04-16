import axios from "axios";
import { Fragment, useEffect, useState } from "react";

function Post() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/db");
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
        const { title, publishedAt, status } = datum?.properties;

        return (
          <Fragment key={datum.id}>
            {/* <h2>{title.title[0].plain_text}</h2> */}
            <h2>{publishedAt.date.start}</h2>
            <h2>{status.select.name}</h2>
          </Fragment>
        );
      })}
    </>
  );
}

export default Post;

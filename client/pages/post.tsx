import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/page");
    console.log(response);
  };
  useEffect(() => {
    fetchData;
  }, []);

  return (
    <>
      <h1>Posts</h1>
    </>
  );
};

export default Posts;

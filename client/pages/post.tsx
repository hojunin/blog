import axios from "axios";
import { useEffect, useState } from "react";

function Post() {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/db");
    console.log("🚀 DATA :  ~ response", response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <></>;

  return (
    <>
      <h1 className="bg-red-700">Post</h1>
    </>
  );
}

export default Post;

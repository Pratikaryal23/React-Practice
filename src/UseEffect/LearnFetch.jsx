import React, { useEffect, useState } from "react";
// let url = "https://jsonplaceholder.typicode.com/posts";
let url = "https://picsum.photos/v2/list";

const LearnFetch = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(url);
      // console.log(res);
      if (res.ok) {
        const res_data = await res.json();
        setData(res_data);
      } else {
        console.log("this is error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // fetch();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data.map((val, i) => {
          return (
            <div key={val.id}>
              <p>id:{val.id}</p>
              <p>{val.author}</p>
              <p>{val.width}</p>
              <img src={val.download_url} width="200px" alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LearnFetch;

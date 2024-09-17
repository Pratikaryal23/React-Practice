import React from "react";
import { useState, useEffect } from "react";

const Hello = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(2);
  const haha = () => {
    setRandom(Math.floor(Math.random() * 100));
  };
  document.title = `${count}||${random}`;
  const click = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("i am use effect");
  }, [random]);
  //array dependency=[]
  return (
    <>
      {" "}
      <h1>{count}</h1>
      <button onClick={click}>Increase</button>
      <h1>{random}</h1>
      <button onClick={haha}>Click</button>
    </>
  );
};

export default Hello;

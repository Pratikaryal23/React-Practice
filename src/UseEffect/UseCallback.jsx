import React, { useCallback, useState } from "react";
import Generaterandom from "./Generaterandom";

const UseCallback = () => {
    const [random, setRandom] = useState(0);
    const [increase, setIncreases] = useState(0);  
  const generate = useCallback(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, [random]);

  const increasess = () => {
    setIncreases(increase + 1);
  };

  return (
    <>
      <Generaterandom random={random} generate={generate} />
      <h1>increase:{increase}</h1>
      <button onClick={increasess}>Increasse</button>
    </>
  );
};

export default UseCallback;

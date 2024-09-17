import { memo } from "react";

const Generaterandom = memo(({ random, generate }) => {
  console.log("rendred child");
  return (
    <>
      <h1>random:{random}</h1>
      <button onClick={generate}>Generate</button>
    </>
  );
});

export default Generaterandom;

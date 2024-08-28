import React, { useState } from "react";

const TOdolist = () => {
  const [inputValue, setInputvalue] = useState("");

  // const list = localStorage.getItem("list");

  console.log(list);

  const [final, setFinal] = useState([]);

  const handleSubmit = () => {
    const data = final.concat(inputValue);
    setFinal(data);
  };

  const handleInputChange = (e) => {
    setInputvalue(e.target.value);
  };

  return (
    <>
      <div className="flex gap-2 bg-green-500">
        <input
          type="text"
          placeholder="Enter items"
          value={inputValue}
          onChange={handleInputChange}
        />

        <button onClick={handleSubmit}>Add button</button>
      </div>
      <ul>
        {final.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default TOdolist;

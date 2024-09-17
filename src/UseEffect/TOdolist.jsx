import React, { useState } from "react";

const TOdolist = () => {
  const [inputValue, setInputvalue] = useState("");

  const storage = JSON.parse(localStorage.getItem("list")) || [];
  // local storage vako data lai linxa
  const [final, setFinal] = useState(storage);
  // storage pass garesi data refresh garda ni rahanxa

  const handleSubmit = () => {
    // trim unwanted space lai hatauxa
    if (inputValue.trim() !== "") {
      const finalArray = [...final, inputValue];
      setFinal(finalArray);
      localStorage.setItem("list", JSON.stringify(finalArray));
      setInputvalue("");
    }
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

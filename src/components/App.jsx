import React, { useState } from "react";

const App = () => {
  let [name, setName] = useState("");
  let [mouseOver, setMouseOver] = useState(false)
  const handleChange = (event) => {
    // console.log(event.target.value);
    let userEntry = event.target.value;
    setName(userEntry);
  };

  const handleMouseEnter = () => {
    setMouseOver(true)
    // console.log(mouseOver)
  }

  const handleMouseLeave = () => {
    setMouseOver(false)
    // console.log(mouseOver)
  }


  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button style={{
        backgroundColor: mouseOver ? "black" : "white"
      }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >Submit</button>
    </div>
  );
};

export default App;

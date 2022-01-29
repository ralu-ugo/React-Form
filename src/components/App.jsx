import React, { useState } from "react";

const App = () => {
  let [name, setName] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
    let userEntry = event.target.value;
    setName(userEntry);
  };
  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={name}
      />
      <button>Submit</button>
    </div>
  );
};

export default App;

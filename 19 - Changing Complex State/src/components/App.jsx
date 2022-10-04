import React, { useState } from "react";

function App() {
  const [name, changeName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    changeName((e) => {
      if (name === "fName")
        return {
          fName: value,
          lName: e.lName
        };
      else if (name === "lName")
        return {
          fName: e.fName,
          lName: value
        };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {name.fName} {name.lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={name.Fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={name.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

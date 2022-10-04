import React, { useState } from "react";

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function att(data) {
    const { value, name } = data.target;
    setContact((e) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: e.lName,
          email: e.email
        };
      } else if (name === "lName") {
        return {
          fName: e.fName,
          lName: value,
          email: e.email
        };
      } else if (name === "email") {
        return {
          fName: e.fName,
          lName: e.lName,
          email: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={att} name="fName" placeholder="First Name" />
        <input onChange={att} name="lName" placeholder="Last Name" />
        <input onChange={att} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

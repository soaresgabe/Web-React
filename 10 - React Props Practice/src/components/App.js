import React from "react";
import ContactList from "./ContactList";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>
        {ContactList(0)}
        {ContactList(1)}
        {ContactList(2)}
      </div>
    </div>
  );
}

export default App;

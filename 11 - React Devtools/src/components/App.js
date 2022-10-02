import React from "react";
import ContactList from "./ContactList";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://avatars.githubusercontent.com/u/99471382?v=4" />
      <div>
        {ContactList(0)}
        {ContactList(1)}
        {ContactList(2)}
      </div>
    </div>
  );
}

export default App;

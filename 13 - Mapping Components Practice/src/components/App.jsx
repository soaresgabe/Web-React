import React from "react";
import emojipedia from "../emojipedia";
import EntryCreator from "./EntryCreator";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(EntryCreator)}</dl>
    </div>
  );
}

export default App;

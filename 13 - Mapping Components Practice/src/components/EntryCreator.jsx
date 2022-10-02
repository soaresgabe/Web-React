import React from "react";
import Entry from "./Entry";

function EntryCreator(emoji) {
  return (
    <Entry
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      text={emoji.meaning}
    />
  );
}

export default EntryCreator;

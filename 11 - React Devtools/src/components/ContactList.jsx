import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function ContactList(i) {
  return (
    <Card
      name={contacts[i].name}
      img={contacts[i].imgURL}
      tel={contacts[i].phone}
      email={contacts[i].email}
    />
  );
}

export default ContactList;
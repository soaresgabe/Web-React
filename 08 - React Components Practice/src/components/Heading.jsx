import React from "react";
import CurrentTime from "./CurrentTime";

let greeting;

const customStyle = {
  color: ""
};

if (CurrentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (CurrentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;

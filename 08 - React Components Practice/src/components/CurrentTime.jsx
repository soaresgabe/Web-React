import React from "react";

const date = new Date();
const currentTime = date.getHours();

function CurrentTime() {
  return currentTime;
}

export default CurrentTime;

import React from "react";
import Login from "./Login";
import Logged from "./Logged";

let isLoggedIn = false;

function App() {
  return isLoggedIn ? <Logged /> : <Login />;
}

export default App;

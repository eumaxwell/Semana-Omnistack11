import React, { useState } from "react";
//import Header from "./Header";
import Routes from "./routes";
import "./global.css";

function App() {
  return <Routes/>;
}

/**
 *   let [counter, SetCounter] = useState(0);

  function increment() {
    SetCounter(counter+1);
  }

  return (
      <div>
      <Header title="Omministack 11">Children {counter}</Header>
      <button onClick={increment}>Incremento</button>
    </div>
 */

export default App;

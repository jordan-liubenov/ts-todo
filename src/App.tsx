import React from "react";

import "./App.css";

import Title from "./components/Title/Title";
import Todos from "./components/Todos/Todos";

Class App() {
  return (
    <div className="App-header">
      <Title />

      <div className="App-content">
        <Todos />
      </div>
    </div>
  );
}

export default App;

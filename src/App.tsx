import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Application } from "./components/application/Application";
import { Greet } from "./components/greet/Greet";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Greet />
      <Application />
      <Skills skills={["HTML", "CSS"]} />
      <Counter />
    </div>
  );
}

export default App;

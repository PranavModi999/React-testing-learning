import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Application } from "./components/application/Application";
import { Greet } from "./components/greet/Greet";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Counter />
      <a href="/">learn react</a>
      <Greet />
      <Application />
      <Skills skills={["HTML", "CSS"]} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import { Application } from "./components/application/Application";
import { Greet } from "./components/greet/Greet";
import { MuiMode } from "./components/mui/MuiMode";
import Skills from "./components/skills/Skills";
import { AppProviders } from "./providers/AppProvider";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Counter />
        <a href="/">learn react</a>
        <Greet />
        <Application />
        <Skills skills={["HTML", "CSS"]} />
      </div>
    </AppProviders>
  );
}

export default App;

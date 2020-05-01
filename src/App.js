import React, { Component } from "react";
import GuessedWords from "./components/GuessedWords";
import Congrats from "./components/Congrats";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[{ guessedWord: "train", count: 3 }]} />
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import GuessedWords from "./components/GuessedWords";

class App extends Component {
  render() {
    return (
      <div>
        <GuessedWords guessedWords={[{ guessedWord: "train", count: 3 }]} />
      </div>
    );
  }
}
export default App;

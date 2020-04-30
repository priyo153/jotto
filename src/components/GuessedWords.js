import React, { Component } from "react";
import PropTypes from "prop-types";

class GuessedWords extends Component {
  rows = this.props.guessedWords.map((row, index) => (
    <tr test-data="guessed-word" key={index}>
      <td>{row.guessedWord}</td>
      <td>{row.count}</td>
    </tr>
  ));
  render() {
    let content;
    if (this.props.guessedWords.length === 0) {
      content = (
        <span test-data="component-instructions">
          Try to guess the secret word!!
        </span>
      );
    } else {
      content = (
        <div test-data="guessed-words">
          <table border="1">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
            {this.rows}
          </table>
        </div>
      );
    }
    return <div test-data="component-word-list">{content}</div>;
  }
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default GuessedWords;

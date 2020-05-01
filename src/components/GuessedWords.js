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
          <h3>Words guessed so far</h3>
          <table className="table table-hover">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{this.rows}</tbody>
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

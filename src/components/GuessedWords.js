import React, { Component } from "react";
import PropTypes from "prop-types";

class GuessedWords extends Component {
  render() {
    let content;
    if (this.props.guessedWords.length === 0) {
      content = (
        <span test-data="component-instructions">
          Try to guess the secret word!!
        </span>
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

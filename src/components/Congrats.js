import React from "react";
import PropTypes from "prop-types";
import { bool } from "prop-types";

/**
 * Functional react component for congrats message
 * @function
 * @param {*} props
 * @returns {jsx.element} rendered component or false if success prop is false
 */
const Congrats = (props) => {
  let message = null;
  if (props.success) {
    message = <h1 test-data="component-msg">Congratulations</h1>;
  }

  return <div test-data="component-congrats">{message}</div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;

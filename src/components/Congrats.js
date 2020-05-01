import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congrats message
 * @function
 * @param {*} props
 * @returns {jsx.element} rendered component or false if success prop is false
 */
const Congrats = (props) => {
  let message = null;
  if (props.success) {
    message = (
      <h3 test-data="component-msg" className="alert alert-success">
        Congratulations
      </h3>
    );
  }

  return <div test-data="component-congrats">{message}</div>;
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;

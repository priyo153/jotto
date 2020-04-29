import React from "react";

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
export default Congrats;

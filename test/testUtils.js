import checkPropTypes from "check-prop-types";

/**
 * finds attribute in wrapped component and returns it
 * @function
 * @param {shallowWrapper} wrapper-  containing the component
 * @param {string} val - value to be searched
 * @returns {jsxElement}
 */
export const getByAttr = (wrapper, val) => {
  const element = wrapper.find(`[test-data="${val}"]`);
  return element;
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.prototypes,
    conformingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};

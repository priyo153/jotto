import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
/**
 * sets up wrapper object
 * @function
 * @param {*} props
 * returns {shallowWrapper} returns a shallow version of component
 */
const setup = (props = {}) => {
  const wrapper = shallow(<Congrats {...props} />);
  return wrapper;
};
/**
 * finds attribute in wrapped component and returns it
 * @function
 * @param {shallowWrapper} wrapper-  containing the component
 * @param {string} val - value to be searched
 * @returns {jsxElement}
 */
const getByAttr = (wrapper, val) => {
  const element = wrapper.find(`[test-data="${val}"]`);
  return element;
};

test("rendered without error", () => {
  const wrapper = setup();
  const CongratsComp = getByAttr(wrapper, "component-congrats");
  expect(CongratsComp.length).toBe(1);
});
test("renders when success is true", () => {
  const wrapper = setup({ success: true });
  const msg = getByAttr(wrapper, "component-msg");
  expect(msg.length).toBe(1);
});
test("does not render when usccess false", () => {
  const wrapper = setup({ success: false });
  const msg = getByAttr(wrapper, "component-msg");
  expect(msg.length).toBe(0);
});

import Enzyme, { shallow } from "enzyme";
import React from "react";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Congrats from "./Congrats";
import { getByAttr, checkProps } from "../../test/testUtils";

const defaultProps = { success: false };

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
  props = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...props} />);
  return wrapper;
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

test("does not throw error on expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});

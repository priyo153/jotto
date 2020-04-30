import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import GuessedWords from "./GuessedWords";
import { checkProps, getByAttr } from "../../test/testUtils";

const defaultProps = { guessedWords: [{ guessedWord: "train", count: 3 }] };
/**
 * Setup the wrapper object
 * @function
 * @param {*} props
 * @param {*} state
 * @returns {shallowWrapper}
 */
let setup = (props = {}, state = null) => {
  const wrapper = shallow(<GuessedWords {...{ ...defaultProps, ...props }} />);
  wrapper.state = state;
  return wrapper;
};

test("component doesnt throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] }, null);
  });

  test("component is rendered", () => {
    const wordList = getByAttr(wrapper, "component-word-list");
    expect(wordList.length).toBe(1);
  });

  test("instruction is rendered to guess a word ", () => {
    const instructions = getByAttr(wrapper, "component-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});
describe("there are words guessed", () => {});

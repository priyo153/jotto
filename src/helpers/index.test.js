import Enzyme from "enzyme";
import { getLetterMatchFunction } from ".";

const secret = "party";

describe("test letter match function ", () => {
  test("when no words match", () => {
    const count = getLetterMatchFunction("cmbbu", secret);
    expect(count).toBe(0);
  });
  test("when some words match", () => {
    const count = getLetterMatchFunction("lurty", secret);
    expect(count).toBe(3);
  });
  test("when some words match and there are duplicate words", () => {
    const count = getLetterMatchFunction("rrrty", secret);
    expect(count).toBe(3);
  });
  test("when all letters match", () => {
    const count = getLetterMatchFunction("party", secret);
    expect(count).toBe(5);
  });
});

import { CORRECT_GUESS } from "../actions/types";
import successReducer from "./successReducer";

test("state is false when no action passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});
test("state is true when CORRECT_GUESS actions passed", () => {
  const newState = successReducer(undefined, { type: CORRECT_GUESS });
  expect(newState).toBe(true);
});

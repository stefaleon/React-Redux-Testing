import commentsReducer from "../commentsReducer";
import { SAVE_COMMENT } from "../../actions/types";

it("reduces actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment"
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["new comment"]);
});

it("reduces actions of unknown type", () => {
  const newState = commentsReducer(["initial state"], { type: "SOME_TYPE" });
  expect(newState).toEqual(["initial state"]);
});

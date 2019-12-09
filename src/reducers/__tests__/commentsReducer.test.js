import commentsReducer from "../commentsReducer";
import { SAVE_COMMENT, FETCH_COMMENTS } from "../../actions/types";

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

it("reduces actions of type FETCH_COMMENTS", () => {
  const action = {
    type: FETCH_COMMENTS,
    payload: [{ name: "jsp-comment-1" }, { name: "jsp-comment-2" }]
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["jsp-comment-1", "jsp-comment-2"]);
});

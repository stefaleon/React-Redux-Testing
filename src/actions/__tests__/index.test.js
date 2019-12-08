import { saveComment } from "../";
import { SAVE_COMMENT } from "../types";

describe("saveComment", () => {
  const action = saveComment("some comment");

  it("creates the correct type", () => {
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("creates the correct payload", () => {
    expect(action.payload).toEqual("some comment");
  });
});

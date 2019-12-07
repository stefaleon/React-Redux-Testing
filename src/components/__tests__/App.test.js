import React from "react";
import { shallow } from "enzyme";

import App from "../../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

it("shows a comment box", () => {
  const wrapper = shallow(<App />);

  // test for the CommentBox component existence here
  expect(wrapper.find(CommentBox).length).toBe(1);
});

it("shows a comment list", () => {
  const wrapper = shallow(<App />);

  // test for the CommentList component existence here
  expect(wrapper.find(CommentList).length).toBe(1);
});

/*
toEqual vs toBe -> toBe implies strict equality, irrelevant for primitives, important for objects
*/

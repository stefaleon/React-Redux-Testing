import React from "react";
import { shallow } from "enzyme";

import App from "../../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("shows a comment box", () => {
  // test for the CommentBox component existence here
  expect(wrapper.find(CommentBox).length).toBe(1);
});

it("shows a comment list", () => {
  // test for the CommentList component existence here
  expect(wrapper.find(CommentList).length).toBe(1);
});

/*
toEqual vs toBe -> toBe implies strict equality, irrelevant for primitives, important for objects

You can use toBe for primitives like strings, numbers or booleans for everything else use toEqual
https://stackoverflow.com/questions/45195025/what-is-the-difference-between-tobe-and-toequal-in-jest?rq=1

*/

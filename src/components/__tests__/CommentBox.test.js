import React from "react";
import { mount } from "enzyme";

import App from "../../App";
import CommentBox from "../CommentBox";

/*
shallow rendering would suffice for this case
using mount (full DOM rendering) for demonstration
unmounting renders must be taken care of -> done at afterEach()
*/

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  // important, doing the cleanup here!!!
  wrapper.unmount();
});

it("has a text area and a button", () => {
  expect(wrapper.find("textarea").length).toBe(1);
  expect(wrapper.find("button").length).toBe(1);
});

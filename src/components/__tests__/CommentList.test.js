import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import CommentList from "../CommentList";

let wrapper;

const initialState = {
  comments: ["1st comment", "2nd comment"]
};

beforeEach(() => {
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has an unordered list", () => {
  expect(wrapper.find("ul").length).toBe(1);
});

it("shows one list element per comment", () => {
  expect(wrapper.find("li").length).toEqual(2);
});

import React from "react";
import { mount } from "enzyme";

import Root from "../../Root";
import CommentList from "../CommentList";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
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

// it("shows one list element per comment", () => {});

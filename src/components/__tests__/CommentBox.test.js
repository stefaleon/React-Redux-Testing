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

describe("the text area", () => {
  beforeEach(() => {
    wrapper
      .find("textarea")
      .simulate("change", { target: { value: "new comment" } });
    wrapper.update();
  });

  it("receives the correct value that the users type in", () => {
    expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
  });

  it("gets emptied on form submission", () => {
    wrapper.find("form").simulate("submit");
    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toEqual("");
  });
});

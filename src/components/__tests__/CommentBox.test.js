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

it("has a text area that the users can type in", () => {
  wrapper
    // find the element
    .find("textarea")
    // simulate the "change" event by providing the mock that sets the target.value
    .simulate("change", { target: { value: "new comment" } });
  // then force the component update
  wrapper.update();

  // finally test that the text area receives the correct "value" prop
  expect(wrapper.find("textarea").prop("value")).toEqual("new comment");
});

it("gets the text area emptied on form submission", () => {
  // first simulate the filling of the form with some data
  wrapper
    .find("textarea")
    .simulate("change", { target: { value: "new comment" } });
  // update
  wrapper.update();
  // confirm that data is properly filled (although it is the previous test case duplicated)
  expect(wrapper.find("textarea").prop("value")).toEqual("new comment");

  // then simulate the "submit" event
  wrapper.find("form").simulate("submit");
  // update again
  wrapper.update();

  // finally test that the text area receives the correct "value" prop - which should be empty
  expect(wrapper.find("textarea").prop("value")).toEqual("");
});

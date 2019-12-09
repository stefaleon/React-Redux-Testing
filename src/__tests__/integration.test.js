import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "../Root";
import App from "../App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Comment1" }, { name: "Comment2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("fetches a list of comments and displays it", () => {
  // render the App
  const wrapper = mount(
    <Root>
      <App />
    </Root>
  );

  // fetch comments
  wrapper.find(".fetch-button").simulate("click");

  // expect a list of comments
  expect(wrapper.find("li").lentgh).toBe(2);
});

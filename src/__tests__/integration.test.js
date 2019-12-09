import React from "react";
import { mount } from "enzyme";

import Root from "../Root";
import App from "../App";

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
  expect(wrapper.find("li").lentgh).toBe(500);
});

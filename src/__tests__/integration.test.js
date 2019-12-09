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

  // TODO - fetch comments

  // TODO - expect a list of comments
});

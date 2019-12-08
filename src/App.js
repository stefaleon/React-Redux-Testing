import React from "react";

import Root from "./Root";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";
import CommentsFetch from "./components/CommentsFetch";

function App() {
  return (
    <Root>
      <div className="App">
        <CommentBox />
        <hr />
        <CommentsFetch />
        <hr />
        <CommentList />
      </div>
    </Root>
  );
}

export default App;

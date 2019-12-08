import React from "react";

import Root from "./Root";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

function App() {
  return (
    <Root>
      <div className="App">
        <CommentBox />
        <CommentList />
      </div>
    </Root>
  );
}

export default App;

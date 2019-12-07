import React from "react";
import { Provider } from "react-redux";

import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentBox />
        <CommentList />
      </div>
    </Provider>
  );
}

export default App;

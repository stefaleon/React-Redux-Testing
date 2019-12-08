import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class CommentFetch extends React.Component {
  state = { comments: [] };

  render() {
    return (
      <button onClick={this.props.fetchComments}>
        Fetch comments from jsonplaceholder API
      </button>
    );
  }
}

export default connect(null, actions)(CommentFetch);

import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class FormPost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Add new Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <p>Post title: </p>
            <div>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div>
            <p>Post body: </p>
            <div>
              <input
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div>
            <button type="submit">ADD</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
    this.clearFormState();
  };

  clearFormState = () => {
    this.setState({
      title: "",
      body: ""
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
}

export default connect(
  null,
  { createPost }
)(FormPost);

import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
  state = { title: "" };

  onChange = e => {
    this.setState({ title: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() === "") return;
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Add todo..."
            onChange={this.onChange}
            value={this.state.title}
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layouts/Header";
import About from "./components/pages/About";

import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/todos?_limit=10";
    axios.get(url).then(res => this.setState({ todos: res.data }));
  }

  markComplete = todoId => {
    const todos = [...this.state.todos];
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === todoId) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDeleteTodo = todoId => {
    const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
    axios.delete(url).then(res => {
      const todos = [...this.state.todos];
      this.setState({
        todos: todos.filter(todo => todo.id !== todoId)
      });
    });
  };

  addTodo = title => {
    const todos = [...this.state.todos];
    // const newTodo = {
    //   id: this.generateTodoId(todos),
    //   title,
    //   completed: false
    // };

    const url = "https://jsonplaceholder.typicode.com/todos";
    axios
      .post(url, { title, completed: false })
      .then(res => this.setState({ todos: [...todos, res.data] }));

    // this.setState({ todos: [...todos, newTodo] });
  };

  generateTodoId = todos => {
    let newId = 0;
    todos.forEach(todo => {
      if (newId === todo.id) {
        newId = todo.id + 1;
      }
    });
    return newId;
  };

  render() {
    return (
      <Router>
        <Header />
        <div className="container">
          <Route
            exact
            path="/"
            render={_ => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  onDeleteTodo={this.handleDeleteTodo}
                />
              </React.Fragment>
            )}
          />

          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;

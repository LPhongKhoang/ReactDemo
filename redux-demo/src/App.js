import React, { Component } from "react";
import "./App.css";

import Posts from "./components/Posts";
import FormPost from "./components/FormPost";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  state = {};
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <FormPost />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;

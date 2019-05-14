import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 4 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    // Suitable place to send AJax, get data from Server
    console.log("App - Mounted");
  }

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
        <Navbar
          totalItem={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <div className="container">
          <Counters
            counters={this.state.counters}
            handleResetCounter={this.handleResetCounter}
            handleDeleteCounter={this.handleDeleteCounter}
            handleIncreamentCounter={this.handleIncreamentCounter}
          />
        </div>
      </React.Fragment>
    );
  }

  handleResetCounter = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncreamentCounter = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); // param counter and counters[index] is same shape but are 2 seprate object
    if (index >= 0) {
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters });
    }
  };

  handleDeleteCounter = counterId => {
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters });
  };
}

export default App;

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters - Constructor");
  }

  render() {
    console.log("Counters - Rendered");
    return (
      <div className="list-counter">
        <button
          className="btn btn-primary btn-sm"
          onClick={this.props.handleResetCounter}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDeleteCounter={this.props.handleDeleteCounter}
            onIncreamentCounter={this.props.handleIncreamentCounter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

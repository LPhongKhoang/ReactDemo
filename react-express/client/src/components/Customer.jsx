import React, { Component } from "react";

class Customer extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers => {
        this.setState({ customers }, () => {
          console.log("Customer is fetched...");
        });
      });
  }

  render() {
    return (
      <ul>
        {this.state.customers.map(cus => (
          <li>{cus.name}</li>
        ))}
      </ul>
    );
  }
}

export default Customer;

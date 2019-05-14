import React, { Component } from "react";
import FormUserDetail from "./FormUserDetail";
import FormPersonalDetail from "./FormPersonalDetail";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    bio: ""
  };

  // Process to next step (next form)
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Process to prev step (prev form)
  prevStep = () => {
    const { step } = this.state;
    if (step <= 1) return;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields changed
  // more detail about this code: https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript
  // square bracket just for accessing dynamic property in ES6
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, ...values } = this.state;
    switch (step) {
      case 1:
        return (
          <FormUserDetail
            values={values}
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <FormPersonalDetail
            values={values}
            nextStep={this.nextStep}
            preStep={this.prevStep}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Confirm
            values={values}
            nextStep={this.nextStep}
            preStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default UserForm;

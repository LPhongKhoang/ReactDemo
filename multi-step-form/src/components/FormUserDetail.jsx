import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormUserDetail extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter your first name"
            floatingLabelText="FirstName"
            defaultValue={values.firstName}
            onChange={handleChange("firstName")}
          />
          <br />
          <TextField
            hintText="Enter your last name"
            floatingLabelText="LastName"
            defaultValue={values.lastName}
            onChange={handleChange("lastName")}
          />
          <br />
          <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            defaultValue={values.email}
            onChange={handleChange("email")}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
}

export default FormUserDetail;

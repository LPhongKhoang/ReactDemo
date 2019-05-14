import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class FormPersonalDetail extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
            hintText="Enter your occupation"
            floatingLabelText="Job"
            defaultValue={values.occupation}
            onChange={handleChange("occupation")}
          />
          <br />
          <TextField
            hintText="Enter your bio"
            floatingLabelText="Bio"
            defaultValue={values.bio}
            onChange={handleChange("bio")}
          />
          <br />
          <RaisedButton
            label="Previous"
            primary={false}
            onClick={this.previous}
          />
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

  previous = e => {
    e.preventDefault();
    this.props.preStep();
  };
}

export default FormPersonalDetail;

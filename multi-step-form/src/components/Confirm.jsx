import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

class Confirm extends Component {
  render() {
    const {
      values: { firstName, lastName, email, occupation, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Form" />
          <List>
            <ListItem primaryText="FirstName" secondaryText={firstName} />
            <ListItem primaryText="LastName" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Job" secondaryText={occupation} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Previous"
            primary={false}
            onClick={this.previous}
          />
          <RaisedButton
            label="Confirm and Continue"
            primary={true}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }

  continue = e => {
    e.preventDefault();
    // Process http request here...
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.preStep();
  };
}

export default Confirm;

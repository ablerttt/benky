import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, updated: false };
  }

  onSubmit = (event) => {
    const { passwordOne, passwordTwo } = this.state;

    if (passwordOne !== passwordTwo) {
      this.setState({
        error: { message: "The two passwords are different from each other." },
      });
      event.preventDefault();
      return;
    }

    // var credential = this.props.firebase.auth.EmailAuthProvider.credential(
    //   this.props.firebase.auth().currentUser.email,
    //   currentPassword
    // );

    // this.props.firebaseApp
    //   .auth()
    //   .currentUser.reauthenticateWithCredential(credential)
    //   .then(() => {
    //     // User re-authenticated.
    //     console.log("reauthentification");
    //   })
    //   .catch((e) => {
    //     console.log("error");
    //   });

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE, updated: true });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { error } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <div>
          Change the email that your account is linked to. If you forget your
          password, you'll receive any emails from this email instead.
        </div>
        <br />
        <form onSubmit={this.onSubmit}>
          <TextField
            name="currentPassword"
            value={this.state.currentPassword}
            onChange={this.onChange}
            type="password"
            label="Original Password"
          />
          <br />
          <TextField
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={this.onChange}
            type="password"
            label="New Password"
          />
          <br />
          <TextField
            name="passwordTwo"
            value={this.state.passwordTwo}
            onChange={this.onChange}
            type="password"
            label="Confirm New Password"
          />
          <br />
          <br />
          <Button
            type="submit"
            className={classes.primaryLightButton}
            variant="contained"
          >
            Reset Password
          </Button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

// export default withFirebase(PasswordChangeForm);
export default compose(withFirebase, withStyles(styles))(PasswordChangeForm);

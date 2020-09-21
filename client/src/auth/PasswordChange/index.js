import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import Typography from "@material-ui/core/Typography"

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  currentPassword: "",
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE, updated: false, success: "" };
  }

  verifyCurrentPassword = async (currentPassword) => {
    await this.props.firebase.doCurrentPasswordVerification(currentPassword);
  };

  updateCurrentPassword = async (password) => {
    await this.props.firebase.doPasswordUpdate(password);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    // this.setState({ error: "" });
    const { passwordOne, passwordTwo, currentPassword } = this.state;
    this.setState({ error: "" });
    if (passwordOne !== passwordTwo) {
      this.setState({
        error: "The two passwords are different from each other.",
      });
      return;
    }

    await this.verifyCurrentPassword(currentPassword)
      .then((res) => {
        console.log(res);
        this.updateCurrentPassword(passwordOne)
          .then((res) => {
            console.log("PASSWORD UPDATE RES");
            console.log(res);
          })
          .catch((e) => {
            console.log("PASSWORD UPDATE ERR");
            console.log(e);
            this.setState({ error: e.message, success: "" });
          });

        this.setState({
          success: "Successfully updated password!",
          passwordOne: "",
          passwordTwo: "",
          currentPassword: "",
          error: "",
        });
      })
      .catch((e) => {
        console.log("PASSWORD VERIFY ERR");
        console.log(e);
        this.setState({ error: e.message, success: "" });
        return;
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      currentPassword,
      passwordOne,
      passwordTwo,
      error,
      success,
    } = this.state;
    const isInvalid =
      currentPassword === "" || passwordOne === "" || passwordTwo === "";
    const { classes } = this.props;
    return (
      <div>
        <Typography>Change your password.</Typography>
        <br />
        <form onSubmit={this.onSubmit}>
          <TextField
            name="currentPassword"
            value={currentPassword}
            onChange={this.onChange}
            type="password"
            label="Original Password"
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "grey",
              },
            }}
          />
          <br />
          <TextField
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            label="New Password"
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "grey",
              },
            }}
          />
          <br />
          <TextField
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            label="Confirm New Password"
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "grey",
              },
            }}
          />
          <br />
          <br />
          <Button
            type="submit"
            className={classes.primaryLightButton}
            variant="contained"
            disabled={isInvalid}
          >
            Reset Password
          </Button>

          {error && <p>{error}</p>}
          {success && <p>{success}</p>}
        </form>
      </div>
    );
  }
}

// export default withFirebase(PasswordChangeForm);
export default compose(withFirebase, withStyles(styles))(PasswordChangeForm);

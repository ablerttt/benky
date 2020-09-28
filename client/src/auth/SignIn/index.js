import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const SignInPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h4" className={classes.intro}>
        Login
      </Typography>
      <SignInForm />
      <br />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  );
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", error: null };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;
    event.preventDefault();

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email: "", password: "", error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const { classes } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          autoFocus
          name="email"
          value={email}
          onChange={this.onChange}
          label="Email Address"
          variant="filled"
          className={classes.logInText}
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "black",
            },
          }}
        />
        <br />
        <TextField
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          variant="filled"
          label="Password"
          className={classes.logInText}
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "black",
            },
          }}
        />
        <br />
        <Button
          type="submit"
          className={classes.primaryLightButton}
          variant="contained"
        >
          Sign In
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
  withStyles(styles)
)(SignInFormBase);

export default withStyles(styles)(SignInPage);

export { SignInForm };

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import { withFirebase } from "../Firebase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as ROUTES from "../../constants/routes";
import TextField from "@material-ui/core/TextField";
// import { useHistory } from "react-router-dom";

const SignUpPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h4" className={classes.intro}>
        Sign Up
      </Typography>
      <SignUpForm />
    </div>
  );
};

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = () => {
    // const { history } = this.props;
    const { username, email, passwordOne, passwordTwo } = this.state;

    // event.preventDefault();
    this.setState({ error: "" });

    if (username === "") {
      this.setState({ error: { message: "Empty username field." } });
      console.log("empty username");
      return;
    }

    if (email === "") {
      this.setState({ error: { message: "Empty email field." } });
      console.log("empty email");
      return;
    }

    if (passwordOne !== passwordTwo) {
      this.setState({ error: { message: "Passwords do not match up." } });
      console.log("invalid passwords");
      return;
    }

    if (passwordOne === "") {
      this.setState({ error: { message: "Password fields are empty." } });
      console.log("empty passwords");
      return;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({ username, email });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        // const history = useHistory();
        // const handleOnClick = React.useCallback(
        //   () => history.push(ROUTES.HOME),
        //   [history]
        // );

        // history.push(ROUTES.HOME, [history]);
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });
    // event.preventDefault();
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <TextField
          autoFocus
          name="username"
          value={username}
          onChange={this.onChange}
          variant="filled"
          label="Username"
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
          name="email"
          value={email}
          onChange={this.onChange}
          variant="filled"
          label="Email Address"
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
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          variant="filled"
          label="Password"
          className={classes.logInText}
          type="password"
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "black",
            },
          }}
        />
        <br />
        <TextField
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          variant="filled"
          label="Confirm Password"
          className={classes.logInText}
          type="password"
          InputProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "black",
            },
          }}
        />
        <br />
        <br />
        <Button
          type="submit"
          onClick={() => this.onSubmit()}
          variant="contained"
          className={classes.primaryLightButton}
        >
          Sign Up
        </Button>

        {error && <p>{error.message}</p>}
      </div>
    );
  }
}

const SignUpLinkBase = (props) => {
  const { classes } = props;
  return (
    <Typography>
      Don't have an account?{" "}
      <Button
        component={Link}
        to={ROUTES.SIGN_UP}
        variant="contained"
        className={classes.primaryLightButton}
      >
        Sign Up
      </Button>
    </Typography>
  );
};

const SignUpLink = withStyles(styles)(SignUpLinkBase);

const SignUpForm = compose(
  withRouter,
  withFirebase,
  withStyles(styles)
)(SignUpFormBase);

export default withStyles(styles)(SignUpPage);

export { SignUpForm, SignUpLink };

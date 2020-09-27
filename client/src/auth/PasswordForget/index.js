import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const PasswordForgetPage = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h4" className={classes.intro}>
        Forgot your password?
      </Typography>
      <PasswordForgetFormEmail />
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = async (event) => {
    await this.props.firebase
      .doPasswordReset()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Typography>
          Send a verification email so you can reset your password.
        </Typography>
        <br />
        <form onSubmit={this.onSubmit}>
          <Button
            type="submit"
            variant="contained"
            className={classes.primaryLightButton}
          >
            Reset Password
          </Button>

          {error && <Typography>{error.message}</Typography>}
        </form>
      </div>
    );
  }
}

class PasswordForgetFormNoAuthBase extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  onSubmit = async (event) => {
    event.preventDefault();

    await this.props.firebase
      .doPasswordResetWithEmail(this.state.email)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { error, email } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Typography>
          Send a verification email so you can reset your password.
        </Typography>
        <br />
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
          <br />
          <Button
            type="submit"
            variant="contained"
            className={classes.primaryLightButton}
          >
            Reset Password
          </Button>
          {error && <Typography>{error.message}</Typography>}
        </form>
      </div>
    );
  }
}

const PasswordForgetLinkBase = (props) => {
  const { classes } = props;
  return (
    <Typography>
      Forgot password? Send a verification email and get it reset
      <Button
        className={classes.primaryLightButton}
        variant="contained"
        component={Link}
        to={ROUTES.PASSWORD_FORGET}
      >
        here
      </Button>
    </Typography>
  );
};

export default withStyles(styles)(PasswordForgetPage);

const PasswordForgetForm = compose(
  withStyles(styles),
  withFirebase
)(PasswordForgetFormBase);

const PasswordForgetFormEmail = compose(
  withStyles(styles),
  withFirebase
)(PasswordForgetFormNoAuthBase);

const PasswordForgetLink = withStyles(styles)(PasswordForgetLinkBase);

export { PasswordForgetForm, PasswordForgetLink, PasswordForgetFormEmail };

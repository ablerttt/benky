import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";

const PasswordForgetPage = () => (
  <div>
    <Typography variant="h3">Forgot your password?</Typography>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    this.props.firebase.doPasswordReset().catch((error) => {
      this.setState({ error });
    });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    const { classes } = this.props;

    return (
      <div>
        Send a verification email so you can reset your password.
        <br />
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

const PasswordForgetLinkBase = (props) => {
  // <Typography>
  //   <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  // </Typography>
  const { classes } = props;
  return (
    <Typography>
      Forgot password? Send a verification email and get it reset
      <Button className={classes.primaryLightButton} variant="contained">
        here
      </Button>
      .
    </Typography>
  );
};

export default PasswordForgetPage;

const PasswordForgetForm = compose(
  withStyles(styles),
  withFirebase
)(PasswordForgetFormBase);

const PasswordForgetLink = withStyles(styles)(PasswordForgetLinkBase);
export { PasswordForgetForm, PasswordForgetLink };

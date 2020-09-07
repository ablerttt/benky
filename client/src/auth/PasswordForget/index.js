import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import TextField from "@material-ui/core/TextField";

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
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="Email Address"
        />
        <Button disabled={isInvalid} type="submit">
          Reset Password
        </Button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };

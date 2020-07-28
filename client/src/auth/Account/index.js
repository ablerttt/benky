import React from "react";
import { compose } from "recompose";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, AuthUserContext } from "../Session";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const AccountPage = (props) => {
  const { classes } = props;
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <Typography variant="h3" className={classes.intro}>
            Account Page
          </Typography>
          <Typography variant="h6">Change Email</Typography>
          <TextField placeholder="Old Email Address" />
          <br />
          <TextField placeholder="New Email Address" />
          <br />
          <Typography variant="h6">Change Password</Typography>
          <PasswordChangeForm />
          <br />
          <Typography variant="h6">Forgot your password?</Typography>
          <PasswordForgetForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  withStyles(styles)
)(AccountPage);

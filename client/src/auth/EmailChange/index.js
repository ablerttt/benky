import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";

const onSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

const EmailChange = (props) => {
  const { classes } = props;
  return (
    <div>
      <div>
        Change the email that your account is linked to. If you forget your
        password, you'll receive any emails from this email instead.
      </div>
      <br />
      <form onSubmit={onSubmit}>
        <TextField label="Old Email Address" />
        <br />
        <TextField label="New Email Address" />
        <br />
        <br />
        <Button
          type="submit"
          variant="contained"
          className={classes.primaryLightButton}
        >
          Change Email
        </Button>
      </form>
    </div>
  );
};

export default withStyles(styles)(EmailChange);

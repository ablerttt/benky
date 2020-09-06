import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const EmailChange = (props) => (
  <div>
    <div>
      Change the email that your account is linked to. If you forget your
      password, you'll receive any emails from this email instead.
    </div>
    <br />
    <TextField label="Old Email Address" />
    <br />
    <TextField label="New Email Address" />
    <br />
  </div>
);

export default EmailChange;

import React from "react";
import TextField from "@material-ui/core/TextField";

const EmailChange = (props) => (
  <div>
    <div>
      Change the email that your account is linked to. If you forget your
      password, you'll receive any emails from this email instead.
    </div>
    <br />
    <TextField
      //   className={props.classes.defTextField}
      label="Old Email Address"
      //   placeholder="Old Email Address"
    />
    <br />
    <TextField
      //   className={props.classes.defTextField}
      label="New Email Address"
      //   placeholder="New Email Address"
    />
  </div>
);

export default EmailChange;

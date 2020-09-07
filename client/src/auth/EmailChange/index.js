import React from "react";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";

class EmailChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", success: "", oldEmail: "", newEmail: "" };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: "", success: "" });
    const oldEmail = document.getElementById("oldEmail").value;
    const newEmail = document.getElementById("newEmail").value;
    const correctOldEmail = this.props.firebase.doVerifyEmail(oldEmail);
    if (!correctOldEmail) {
      this.setState({
        error:
          "Old email address provided does not match with this user's email address.",
      });
      return;
    } else {
      await this.props.firebase
        .doUpdateEmail(newEmail)
        .then((res) => {
          console.log("RES");
          console.log(res);
          this.setState({
            erorr: "",
            success: "Email successfully updated!",
            oldEmail: "",
            newEmail: "",
          });
        })
        .catch((e) => {
          console.log("ERR");
          console.log(e);
          this.setState({ error: e.message, success: "" });
        });
    }
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { error, success, oldEmail, newEmail } = this.state;
    const isInvalid = oldEmail === "" || newEmail === "";
    return (
      <div>
        <div>
          Change the email that your account is linked to. If you forget your
          password, you'll receive any emails from this email instead.
        </div>
        <br />
        <form onSubmit={this.onSubmit}>
          <TextField
            id="oldEmail"
            name="oldEmail"
            label="Old Email Address"
            onChange={this.onChange}
            value={oldEmail}
          />
          <br />
          <TextField
            id="newEmail"
            name="newEmail"
            label="New Email Address"
            onChange={this.onChange}
            value={newEmail}
          />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            className={classes.primaryLightButton}
            disabled={isInvalid}
          >
            Change Email
          </Button>
        </form>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </div>
    );
  }
}

export default compose(withStyles(styles), withFirebase)(EmailChange);

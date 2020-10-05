import React from "react";
import { withFirebase } from "../Firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import Typography from "@material-ui/core/Typography";

class EmailChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      success: "",
      newEmail: "",
      currEmail: this.props.firebase.getUserEmail(),
    };
  }

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: "", success: "" });
    const newEmail = document.getElementById("newEmail").value;
    await this.props.firebase
      .doUpdateEmail(newEmail)
      .then((res) => {
        console.log("RES");
        console.log(res);
        this.setState({
          erorr: "",
          success: "Email successfully updated!",
          newEmail: "",
        });
      })
      .catch((e) => {
        console.log("ERR");
        console.log(e);
        this.setState({ error: e.message, success: "" });
      });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { error, success, newEmail, currEmail } = this.state;
    const isInvalid = newEmail === "";
    return (
      <div>
        <Typography>
          Change the email that your account is linked to. If you forget your
          password, you'll receive any emails from this email instead.
        </Typography>
        <br />
        <Typography>
          Your current email is <strong>{currEmail}</strong>
        </Typography>
        <br />
        <form onSubmit={this.onSubmit} style={{ margin: "auto" }}>
          <TextField
            id="newEmail"
            name="newEmail"
            label="New Email Address"
            onChange={this.onChange}
            value={newEmail}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: {
                color: "grey",
              },
            }}
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

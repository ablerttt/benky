import React from "react";
import styles from "../../constants/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

class DeleteAccount extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showDialog: false, error: "" };
  }

  onDeleteAccount = async () => {
    this.setState({ error: "" });
    await this.props.firebase
      .doDeleteUser()
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        this.setState({ showDialog: false, erorr: e.message });
      });

    this.props.history.push("/");
  };

  handleCancel = () => {
    this.setState({ showDialog: false });
  };

  handleOpen = () => {
    this.setState({ showDialog: true });
  };

  render() {
    const { classes } = this.props;
    const { showDialog, error } = this.state;
    return (
      <div>
        <Typography>Permanantly delete your account.</Typography>
        <br />
        <Button
          className={classes.primaryLightButton}
          onClick={this.handleOpen}
          variant="contained"
        >
          Delete Account
        </Button>
        <br />
        {error && <p>{error}</p>}
        <Dialog open={showDialog} onClose={this.handleCancel}>
          <DialogTitle id="alert-dialog-title" className={classes.dialog}>
            {"Delete your account permanatly?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This action cannot be reversed.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={this.handleCancel}
              variant="contained"
              className={classes.cancelButton}
            >
              Cancel
            </Button>
            <Button
              onClick={this.onDeleteAccount}
              variant="contained"
              className={classes.warningButton}
            >
              Delete Account
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default compose(
  withFirebase,
  withRouter,
  withStyles(styles)
)(DeleteAccount);

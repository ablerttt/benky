import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const handlePractice = (props) => {
  props.history.push("/sets");
};

const CreateDialog = (props) => {
  return (
    <Dialog
      open={props.showDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Successfully created!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You can choose to continue editing or start practicing!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeDialog} color="primary">
          Continue Editing
        </Button>
        <Button onClick={() => handlePractice(props)} color="primary" autoFocus>
          Practice
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withRouter(CreateDialog);

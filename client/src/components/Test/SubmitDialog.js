import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { compose } from "recompose";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

function getAllIndexes(arr, val) {
  var indexes = [];
  var i = -1;
  while ((i = arr.indexOf(val, i + 1)) !== -1) {
    indexes.push(i);
  }
  return indexes;
}

const SubmitVerification = (props) => {
  if (props.unanswered.length > 0) {
    return (
      <Typography component={"span"}>
        There are still <strong>{props.unanswered.length}</strong> unanswered
        questions. Go back and check again!
      </Typography>
    );
  } else {
    return (
      <Typography component={"span"}>
        Have you double and triple checked?
      </Typography>
    );
  }
};

const SubmitDialog = (props) => {
  const { classes, showDialog, answers } = props;
  const unansweredIndices = getAllIndexes(answers, -1);
  console.log(unansweredIndices);
  return (
    <div>
      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={props.onSubmit}
      >
        Submit
      </Button>
      <Dialog
        open={showDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Submission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <SubmitVerification unanswered={unansweredIndices} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.closeDialog()}
            className={classes.primaryDarkButton}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            // onClick={() => handlePractice(props)}
            className={classes.primaryDarkButton}
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default compose(withRouter, withStyles(styles))(SubmitDialog);

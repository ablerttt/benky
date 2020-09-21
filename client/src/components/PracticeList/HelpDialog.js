import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import Typography from "@material-ui/core/Typography";

const HelpDialog = (props) => {
  const { classes, showDialog, escDialog } = props;
  return (
    <Dialog
      open={showDialog}
      onEscapeKeyDown={escDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.dialog}>
        {"How to practice?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography component={"span"}>
            Stuck on where to start? We're here to help! Here's some keyboard
            shortcuts that might make your practice more efficient.
          </Typography>
          <br />
          <br />
          <Typography component={"span"}>
            <strong>LEFT/RIGHT</strong>
          </Typography>
          <br />
          <Typography component={"span"}>
            Navigate from one term to the next. Note that on large screens, this
            can be done with the buttons on the left and right sides,
            respectively.
          </Typography>
          <br />
          <br />
          <Typography component={"span"}>
            <strong>SPACE</strong>
          </Typography>
          <br />
          <Typography component={"span"}>
            Show the description for the current term. Clicking on the space key
            will hide the description.
          </Typography>
          <br /> <br />
          <Typography component={"span"}>
            <strong>S</strong>
          </Typography>
          <br />
          <Typography component={"span"}>
            Shuffle terms for some more fun! Clicking on the the s key or
            flipping the shuffle switch will reset the session.
          </Typography>
          <br /> <br />
          <Typography component={"span"}>
            <strong>R</strong>
          </Typography>
          <br />
          <Typography component={"span"}>
            Done studying this set? Reset and go again!
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={escDialog}
          className={classes.primaryDarkButton}
          variant="contained"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(HelpDialog);

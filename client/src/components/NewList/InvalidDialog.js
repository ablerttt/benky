import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const ErrorCard = (props) => {
  const code = props.code;
  var term = "";
  var err = "";
  const errCode = code.search(/[tdm]/);
  const index = parseInt(code.substring(0, errCode));

  if (props.code === "a" || props.code === "e") {
    term = "Title";
    err =
      props.code === "a" ? "Empty title" : "Current title is already in use";
  } else {
    term =
      "Term " +
      parseInt(parseInt(code.substring(0, code.search(/[tdm]/))) + 1) +
      ": " +
      (props.cards[index].term === "" ? "[Empty]" : props.cards[index].term);
    for (let i = 1; i < code.length; i++) {
      if (code[i] === "t") {
        err = "Empty term";
      }
      if (code[i] === "m") {
        err = "Duplicate term";
      }
      if (code[i] === "d") {
        if (err !== "") {
          err += ", empty description";
        } else {
          err = "Empty description";
        }
      }
    }
  }

  return (
    <ListItem key={`error=${code[0]}`}>
      <ListItemText primary={`${term}`} secondary={err} component={"span"} />
    </ListItem>
  );
};

const ListErrors = (props) => {
  return (
    <List dense>
      {props.errors.map((i, c) => {
        return (
          <DialogContentText key={`error-context-${c}`}>
            <ErrorCard
              code={i}
              c={c}
              key={`error-card-${c}`}
              cards={props.cards}
            />
          </DialogContentText>
        );
      })}
    </List>
  );
};

const InvalidDialog = (props) => {
  const { classes } = props;
  return (
    <Dialog
      open={props.showDialog}
      onEscapeKeyDown={props.escInvalidDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" className={classes.dialog}>
        {"Errors exist within your set."}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please correct the following inconsistencies:
        </DialogContentText>
        <ListErrors errors={props.errors} cards={props.cards} />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={props.closeInvalidDialog}
          variant="contained"
          className={classes.primaryDarkButton}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(InvalidDialog);

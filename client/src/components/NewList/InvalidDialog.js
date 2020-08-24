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

const ErrorCard = (props) => {
  var term = "";
  if (props.code === "a") {
    term = "title";
  } else {
    term =
      "Term " +
      (props.code[0] + 1) +
      ": " +
      props.cards[parseInt(props.code[0])].term;
  }

  return (
    <ListItem key={`error=${props.code[0]}`}>
      <ListItemText primary={`${term}`} />
    </ListItem>
  );
};

const ListErrors = (props) => {
  return (
    <List dense>
      {props.errors.map((i, c) => {
        return (
          <ErrorCard
            code={i}
            c={c}
            key={`error-card-${c}`}
            cards={props.cards}
          />
        );
      })}
    </List>
  );
};

const InvalidDialog = (props) => {
  return (
    <Dialog
      open={props.showDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Errors exist within your set."}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please correct the following inconsistencies:
        </DialogContentText>
        <ListErrors errors={props.errors} cards={props.cards} />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.closeInvalidDialog} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InvalidDialog;

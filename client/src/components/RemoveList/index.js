import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import api from "../../api";

export default function RemoveList(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    console.log(`remove button for ${props.id}: open`);
    setOpen(true);
  };

  const handleClose = () => {
    console.log(`remove button for ${props.id}: closed`);
    setOpen(false);
  };

  const handleRemoveSetButton = () => {
    handleClose();
    api.deleteStudySetById(props.id).then((res) => {
      console.log(`Studyset deleted with response ${res}`);
    });
    props.onRemoveSet(props.keyVal);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove this set?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Once you remove this set, it cannot be recovered.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemoveSetButton} color="primary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

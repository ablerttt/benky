import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";

const NextInput = (props) => {
  return (
    <div>
      <TextField multiline value={props.nextName} label="Term" />
      <TextField multiline label="Definition" value={props.nextDef} />
      <Button>
        <CloseIcon />
      </Button>
    </div>
  );
};

export default NextInput;

import React from "react";
import styles from "../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const EmptySet = (props) => {
  const { classes, id } = props;
  return (
    <div>
      <Typography gutterBottom variant="h6">
        Looks like your set is empty!
      </Typography>
      <Typography gutterBottom variant="body1">
        Consider adding a few terms to continue.
      </Typography>
      <Button href={`/set/${id}`}>Add Terms</Button>
    </div>
  );
};

export default withStyles(styles)(EmptySet);

import React from "react";
import styles from "../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NewSetLink } from "../components/NewList";

const NoSets = (props) => {
  const { id } = props;
  return (
    <div>
      <Typography gutterBottom variant="h6">
        Looks like there are no sets!
      </Typography>
      <Typography gutterBottom variant="body1">
        Start by adding a set today!
      </Typography>
      <NewSetLink id={id} color="b3f0a7" />
    </div>
  );
};

export default withStyles(styles)(NoSets);

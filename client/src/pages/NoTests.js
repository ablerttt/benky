import React from "react";
import styles from "../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { NewSetLink } from "../components/NewList";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const NoSets = (props) => {
  const { id } = props;
  return (
    <div>
      <Typography gutterBottom variant="h6">
        Looks like there are no test results!!
      </Typography>
      <Typography gutterBottom variant="body1">
        Start by taking a test from a set you already created!
      </Typography>
      <NewSetLink id={id} color="b3f0a7" />
      <Button
        component={Link}
        to={"/sets"}
        variant="contained"
        className={classes.primaryDarkButton}
      >
        Test
      </Button>
    </div>
  );
};

export default withStyles(styles)(NoSets);

import React from "react";
import styles from "../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const NoTests = (props) => {
  const { classes } = props;
  return (
    <div>
      <Typography
        variant="h4"
        className={classes.intro}
        style={{
          display: "inline-block",
          verticalAlign: "middle",
        }}
      >
        Test Archive
      </Typography>
      <br />
      <Typography gutterBottom variant="h6">
        Looks like there are no test results!!
      </Typography>
      <Typography gutterBottom variant="body1">
        Start by taking a test from a set you already created!
      </Typography>
      <br />
      <Button
        component={Link}
        to={"/sets"}
        variant="contained"
        className={classes.highlightButton}
      >
        Start Testing!
      </Button>
    </div>
  );
};

export default withStyles(styles)(NoTests);

import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const TestResultContainer = (props) => {
  /*
    title={title}
    questionSet={questionSet}
    setId={setId}
    dateTaken={dateTaken}
    */
  const { classes } = props;
  return (
    <div>
      <Typography className={classes.intro} variant="h5">
        View Results: {props.title}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(TestResultContainer);

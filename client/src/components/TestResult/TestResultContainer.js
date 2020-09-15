import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Question from "./Question";

const TestResultContainer = (props) => {
  /*
    title={title}
    questionSet={questionSet}
    setId={setId}
    dateTaken={dateTaken}
    */
  const { classes, title, questionSet, setId, dateTaken } = props;
  return (
    <div>
      <Typography className={classes.intro} variant="h5">
        View Results: <strong>{props.title}</strong>
      </Typography>
      {questionSet.map((q, i) => {
        return <Question value={q} key={i} index={parseInt(i + 1)} />;
      })}
    </div>
  );
};

export default withStyles(styles)(TestResultContainer);

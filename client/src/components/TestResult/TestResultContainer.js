import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Question from "./Question";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { convertLastModifiedTime } from "../../constants/times";

function calculateScore(questionSet) {
  const total = questionSet.length;
  var correct = 0;
  for (let i = 0; i < total; ++i) {
    if (questionSet[i].chosen === questionSet[i].correctAnswer) {
      correct++;
    }
  }
  return [correct, total];
}

const TestResultContainer = (props) => {
  const { classes, title, questionSet, setId, dateTaken, gotoLink } = props;
  const score = calculateScore(questionSet);
  return (
    <div>
      <Grid container justify="space-between" alignItems="flex-end">
        <div>
          <Typography className={classes.intro} variant="h5">
            View Results: <strong>{title}</strong>
          </Typography>
          <Typography variant="body1">
            {"Taken "}
            {convertLastModifiedTime(new Date(dateTaken), new Date(Date.now()))}
            {" ago"}
          </Typography>
        </div>
        <div style={{ align: "right" }}>
          <Typography className={classes.intro} variant="h5" align="right">
            {parseFloat(
              (parseFloat(score[0]) / parseFloat(score[1])) * 100.0
            ).toPrecision(2)}
            {"%"}
          </Typography>
          <Typography variant="h6" align="right">
            {"Score: "}
            {`${score[0]}/${score[1]}`}
          </Typography>
        </div>
      </Grid>

      {questionSet.map((q, i) => {
        return <Question value={q} key={i} index={parseInt(i + 1)} />;
      })}
      <Typography variant="h6" gutterBottom style={{ marginBottom: "0.5em" }}>
        Where to next?
      </Typography>
      {!gotoLink && (
        <Typography gutterBottom>
          Unfortunately, this set no longer exists.
        </Typography>
      )}
      {gotoLink && (
        <div>
          <Typography gutterBottom display="inline">
            Want to edit this list?{`\t`}
          </Typography>
          <Button
            className={classes.primaryLightButton}
            variant="contained"
            component={Link}
            to={`/set/${setId}`}
          >
            Edit
          </Button>
          <br />
          <Typography gutterBottom display="inline">
            Want to practice before the next big test?{"\t"}
          </Typography>
          <Button
            className={classes.primaryLightButton}
            variant="contained"
            component={Link}
            to={`/p/${setId}`}
          >
            Practice
          </Button>
          <br />
          <Typography gutterBottom display="inline">
            Want to take the test again?{" "}
          </Typography>
          <Button
            className={classes.primaryLightButton}
            variant="contained"
            component={Link}
            to={`/test/${setId}`}
          >
            Retake Test
          </Button>
          <br />
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(TestResultContainer);

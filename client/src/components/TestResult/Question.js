import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
var classNames = require("classnames");

const Question = (props) => {
  const { classes, value, index } = props;
  const status =
    value.chosen === value.correctAnswer
      ? "Correct"
      : value.chosen === -1
      ? "No attempt"
      : "Incorrect";

  return (
    <div>
      <Card className={classes.testCard}>
        <CardContent className={classNames(classes.clearStyle, classes.intro)}>
          <Typography variant="h6" display="inline">
            {`${index}. `}
            {"   "} {value.term}
          </Typography>
          <br />
          <Typography
            display="inline"
            style={{
              float: "right",
            }}
          >
            {status}
          </Typography>
          <br />
        </CardContent>

        <CardActions style={{ display: "inline" }}>
          <br />
          {value.options.map((des, ind) => (
            <Button
              disableRipple
              disableFocusRipple
              disableTouchRipple
              key={ind}
              className={classNames(
                classes.colortest,
                classes.buttonSampleTerm,
                ind === value.chosen && classes.correctButton,
                ind !== value.chosen &&
                  ind === value.correctAnswer &&
                  classes.incorrectButton,
                ind !== value.chosen &&
                  ind !== value.correctAnswer &&
                  classes.unselectedButton
              )}
              variant="contained"
            >
              {des}
            </Button>
          ))}
        </CardActions>
      </Card>
    </div>
  );
};
export default withStyles(styles)(Question);

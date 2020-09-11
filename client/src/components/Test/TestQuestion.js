import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const TestQuestion = (props) => {
  const { classes, cards, questions, index } = props;
  return (
    <Paper>
      <Typography variant="h6">
        {`${index}`}
        {"   "} {cards[index].term}
      </Typography>
      <Typography>{"Connect with:"}</Typography>
      {questions[index][1].map((num) => {
        return (
          <Button className={classes.primaryLightButton}>
            {cards[num].description}
          </Button>
        );
      })}
    </Paper>
  );
};

export default withStyles(styles)(TestQuestion);

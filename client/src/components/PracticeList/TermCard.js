import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";

const TermCard = (props) => {
  const { classes, cards, indices, index } = props;
  return (
    <Paper variant="elevation" className={classes.practiceCard}>
      <div
        styles={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          {cards[indices[index]].term}
        </Typography>

        <Button className={classes.practiceCardButton} variant="contained">
          Description
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TermCard);

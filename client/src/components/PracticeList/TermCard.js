import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";

const TermCard = (props) => {
  return (
    <Paper variant="elevation" className={classes.practiceCard}>
      <div style={{ margin: "auto" }}>
        <Typography
          variant="h3"
          align="justify"
          gutterBottom
          className={classes.practiceCardTerm}
        >
          {cards[indices[index]].term}
        </Typography>

        <Button
          className={`${classes.primaryLightButton} ${classes.practiceRevealDescription}`}
          variant="contained"
        >
          Description
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TermCard);

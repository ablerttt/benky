import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Grow from "@material-ui/core/Grow";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TermCard = (props) => {
  const { classes, cards, indices, index, showDef, toggleFlip } = props;
  return (
    <Paper variant="elevation" className={classes.practiceCard}>
      <div>
        <Typography
          variant="h3"
          gutterBottom
          className={classes.practiceCardTitle}
        >
          {cards[indices[index]].term}
        </Typography>

        <div className={classes.practiceCardContent}>
          <FormControlLabel
            className={classes.practiceCardContent}
            control={<Switch checked={showDef} onChange={toggleFlip} />}
            label="Show"
          />
        </div>
        <br />
        <Grow in={showDef}>
          <Paper className={classes.practiceCardDescription} elevation={5}>
            {cards[indices[index]].description}
          </Paper>
        </Grow>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TermCard);

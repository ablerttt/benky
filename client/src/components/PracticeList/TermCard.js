import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const TermCard = (props) => {
  const { classes, cards, indices, index, showDef, toggleFlip } = props;
  const [checked, setChecked] = React.useState(false);

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
        <div className={classes.practiceCardControl}>
          <FormControlLabel
            className={classes.practiceCardControl}
            control={<Switch checked={showDef} onChange={toggleFlip} />}
            label="Show"
          />
        </div>
        <Grow in={showDef}>
          <Paper elevation={4} className={classes.practiceCardDescription}>
            {cards[indices[index]].description}
          </Paper>
        </Grow>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TermCard);

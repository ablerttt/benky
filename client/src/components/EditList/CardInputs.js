import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";

const CardInputs = (props) => {
  const { classes } = props;
  return props.cards.map((val, idx) => {
    let cardId = `card-${idx}`,
      desId = `des-${idx}`;
    return (
      <div key={idx}>
        <TextField
          multiline
          className={classes.termTextField}
          value={props.cards[idx].term}
          name={cardId}
          dataid={idx}
          id={cardId}
          onChange={(e) => props.changeTerm(e, idx)}
        />
        <TextField
          multiline
          className={classes.defTextField}
          value={props.cards[idx].description}
          name={desId}
          dataid={idx}
          id={desId}
          onChange={(e) => props.changeDef(e, idx)}
        />
        <Button
          onClick={props.removeItem.bind(this, idx)}
          className={`${classes.button} ${classes.secondaryButton}`}
          variant="contained"
        >
          <CloseIcon />
        </Button>
      </div>
    );
  });
};

export default withStyles(styles)(CardInputs);

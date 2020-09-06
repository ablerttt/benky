import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const CardInputs = (props) => {
  const { classes } = props;
  return props.cards.map((val, idx) => {
    let cardId = `card-${idx}`,
      desId = `des-${idx}`;
    return (
      <div key={idx}>
        <FormControl className={classes.termTextField}>
          <InputLabel htmlFor="component-helper" margin="dense">
            {parseInt(idx + 1)}
          </InputLabel>
          <Input
            multiline
            value={props.cards[idx].term}
            name={cardId}
            dataid={idx}
            id={cardId}
            onChange={(e) => props.changeTerm(e, idx)}
          />
        </FormControl>
        <FormControl className={classes.defTextField}>
          <InputLabel htmlFor="component-helper" margin="dense">
            {""}
          </InputLabel>
          <Input
            multiline
            value={props.cards[idx].description}
            name={desId}
            dataid={idx}
            id={desId}
            onChange={(e) => props.changeDef(e, idx)}
          />
        </FormControl>
        <Button
          onClick={props.removeItem.bind(this, idx)}
          className={`${classes.button} ${classes.primaryDarkButton}`}
          variant="contained"
        >
          <CloseIcon />
        </Button>
      </div>
    );
  });
};

export default withStyles(styles)(CardInputs);

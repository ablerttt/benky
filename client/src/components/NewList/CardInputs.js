import React from "react";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CloseIcon from "@material-ui/icons/Close";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";

const CardInputs = (props) => {
  const { classes, cards } = props;
  return cards.map((val, idx) => {
    let cardId = `card-${idx}`,
      desId = `des-${idx}`;
    return (
      <div key={idx}>
        <Card raised className={classes.termCard}>
          <FormControl className={classes.termTextField}>
            <InputLabel htmlFor="component-helper" margin="dense">
              {parseInt(idx + 1)}
            </InputLabel>
            <Input
              multiline
              value={cards[idx].term}
              name={cardId}
              dataid={idx}
              className={classes.input}
              id={`term-${idx}`}
              onChange={(e) => props.changeTerm(e, idx)}
              // onChange={props.changeTerm(this, idx)}
            />
          </FormControl>
          <FormControl className={classes.defTextField}>
            <InputLabel htmlFor="component-helper" margin="dense" />
            <Input
              multiline
              value={cards[idx].description}
              name={desId}
              dataid={idx}
              className={classes.input}
              id={`des-${idx}`}
              onChange={(e) => props.changeDef(e, idx)}
              // onChange={props.changeDef.bind(idx)}
            />
          </FormControl>
          <Button
            onClick={props.removeItem.bind(this, idx)}
            className={classes.deleteCardButton}
            variant="contained"
          >
            <CloseIcon />
          </Button>
        </Card>
      </div>
    );
  });
};

CardInputs.propTypes = {};

export default withStyles(styles)(CardInputs);

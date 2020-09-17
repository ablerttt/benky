import React from "react";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles"
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";

const CardInputs = (props) => {
  const { classes } = props;
  return props.cards.map((val, idx) => {
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

export default withStyles(styles)(CardInputs);

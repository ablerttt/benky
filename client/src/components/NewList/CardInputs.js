// src/components/CardInputs.js
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

const CardInputs = (props) => {
  return props.cards.map((val, idx) => {
    let cardId = `card-${idx}`,
      desId = `des-${idx}`;
    return (
      <div key={idx}>
        <TextField
          value={props.cards[idx].term}
          name={cardId}
          dataid={idx}
          id={cardId}
          inputProps={props.cards[idx].name}
          className="name"
          onChange={(e) => props.changeTerm(e, idx)}
        />
        <TextField
          value={props.cards[idx].description}
          name={desId}
          dataid={idx}
          id={desId}
          inputProps={props.cards[idx].des}
          className="des"
          onChange={(e) => props.changeDef(e, idx)}
        />
        <Button onClick={props.removeItem.bind(this, idx)}>
          <CloseIcon />
        </Button>
      </div>
    );
  });
};
export default CardInputs;

// src/components/CardInputs.js
import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

const CardInputs = (props) => {
  return props.cards.map((val, idx) => {
    let cardId = `term-${idx}`,
      desId = `des-${idx}`;
    return (
      <div key={idx}>
        <TextField
          name={cardId}
          data-id={idx}
          id={cardId}
          inputProps={props.cards[idx].name}
          className="term"
        />
        <TextField
          name={desId}
          data-id={idx}
          id={desId}
          inputProps={props.cards[idx].des}
          className="des"
        />
        <Button onClick={props.removeItem.bind(this, idx)}>
          <CloseIcon />
        </Button>
      </div>
    );
  });
};
export default CardInputs;

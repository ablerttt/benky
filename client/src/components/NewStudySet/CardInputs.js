// src/components/CardInputs.js
import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import CloseIcon from "@material-ui/icons/Close";

const CardInputs = (props) => {
  return props.cards.map((val, idx) => {
    let cardId = `card-${idx}`,
      ageId = `age-${idx}`;
    return (
      <div key={idx}>
        <TextField
          name={cardId}
          data-id={idx}
          id={cardId}
          value={props.cards[idx].name}
          className="name"
        />
        <TextField
          name={ageId}
          data-id={idx}
          id={ageId}
          value={props.cards[idx].age}
          className="age"
        />
        <Button onClick={props.removeItem.bind(this, idx)}>
          <CloseIcon />
        </Button>
      </div>
    );
  });
};
export default CardInputs;

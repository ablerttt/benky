// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Icon from "@material-ui/core/Icon";
// import CloseIcon from "@material-ui/icons/Close";
// import { removeCard } from "./form";

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//     border: 0,
//     borderRadius: 3,
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//     color: "white",
//     height: 48,
//     // padding: "0 30px",
//   },
//   input: {
//     // margin: "0 30px",
//   },
//   term: {
//     // margin: "0 30px",
//     width: "20%",
//   },
//   def: {
//     // margin: "0 30px",
//     width: "30%",
//   },
// });

// class CardInputs {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const classes = useStyles();
//     return this.cards.map((val, idx) => {
//       let cardId = `card-${idx}`,
//         defId = `def-${idx}`;
//       return (
//         <div key={idx}>
//           <TextField
//             multiline
//             className={classes.term}
//             name={cardId}
//             data-id={idx}
//             id={cardId}
//             // value={props.cards[idx].name}
//             label="Term"
//           />
//           <TextField
//             multiline
//             className={classes.def}
//             name={defId}
//             data-id={idx}
//             id={defId}
//             // value={props.cards[idx].def}
//             label="Definition"
//           />
//           <Button onClick={this.removeFunction}>
//             <CloseIcon />
//           </Button>
//         </div>
//       );
//     });
//   }
// }
// export default CardInputs;

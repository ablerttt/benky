import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import NewSetForm from "./form";
import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../../constants/routes";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
// import NextEmptyForm from "./formNext";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 300,
  },
  //style for font size
  resize: {
    fontSize: 30,
  },
}));

function NewSetPage() {
  let classes = useStyles();
  return (
    <div>
      <NewSetForm />
    </div>
  );
}

const NewSetMessage = () => (
  <p>
    <Link to={ROUTES.NEW_SET}>Create a new set here.</Link>
  </p>
);

export default NewSetPage;
export { NewSetMessage, useStyles };

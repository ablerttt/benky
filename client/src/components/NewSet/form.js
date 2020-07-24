import React from "react";
import CardInputs from "./input";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NextInput from "./inputNext";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./index";

class NewSetForm extends React.Component {
  state = {
    title: "",
    cards: [{ name: "", def: "" }],
  };

  handleChange = (e) => {
    if (["name", "def"].includes(e.target.className)) {
      let cards = [...this.state.cards];
      cards[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ cards }, () => console.log(this.state.cards));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  addCard = (e) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, { name: "", def: "" }],
    }));
  };

  handleNewInput = (e) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, { name: "", def: "" }],
    }));
  };

  removeCard = (e) => {
    e.preventDefault();
  };

  handleSubmit = async (e) => {
    const { completeSet } = this.state;

    await api.insertStudySet(completeSet).then((res) => {
      window.alert("Inserted successfully.");
      this.setState({ cards: [{ name: "", def: "" }] });
    });
    e.preventDefault();
  };

  render() {
    let { title, cards } = this.state;
    let classes = useStyles();
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <Typography variant="h1">
          <TextField
            id="with-placeholder"
            placeholder="Untitled Set"
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            className={classes.textField}
            // margin="normal"
            autoFocus={true}
          />
        </Typography>
        <CardInputs cards={cards} />
        <Button onClick={this.addCard}>
          <AddIcon />
        </Button>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewSetForm;

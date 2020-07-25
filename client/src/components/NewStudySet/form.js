import React from "react";
import CardInputs from "./CardInputs";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

class Form extends React.Component {
  state = {
    title: "",
    cards: [{ name: "", age: "" }],
  };
  handleChange = (e) => {
    if (["name", "age"].includes(e.target.className)) {
      let cards = [...this.state.cards];
      cards[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ cards }, () => console.log(this.state.cards));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  deleteCard = (i) => {
    let currentCards = [...this.state.cards];
    currentCards.splice(i, 1);
    this.setState({ cards: currentCards });
  };
  addCard = (e) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, { name: "", age: "" }],
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    let { title, cards } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        {/* <label htmlFor="name">Owner</label>
        <input type="text" name="owner" id="owner" value={owner} />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
        /> */}
        <Typography variant="h1">
          <TextField
            name="title"
            id="title"
            value={title}
            placeholder="Untitled List"
          />
        </Typography>
        <CardInputs cards={cards} removeItem={this.deleteCard} />
        <Button onClick={this.addCard}>
          <AddIcon />
        </Button>
        <br />
        <Button>Save</Button>
      </form>
    );
  }
}
export default Form;

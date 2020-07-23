import React from "react";
import CardInputs from "./input";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import NextInput from "./inputNext";

class NewSetForm extends React.Component {
  state = {
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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let { cards } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
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

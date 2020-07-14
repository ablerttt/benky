import React from "react";
import CardInputs from "./input";
import AddIcon from "@material-ui/icons/Add";

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

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    let { cards } = this.state;
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <CardInputs cards={cards} />
        {/* <button onClick={this.addCard}>+</button> */}
        <AddIcon onClick={this.addCard} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NewSetForm;

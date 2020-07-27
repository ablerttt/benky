import React, { Component } from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

class StudySetInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      cards: [{ term: "", description: "" }],
    };
  }

  handleChangeCardTerm = async (event, idx) => {
    const term = event.target.value;
    let cards = [...this.state.cards];
    let newCard = { ...cards[idx] };
    newCard.term = term;
    cards[idx] = newCard;
    this.setState({ cards });
  };

  handleChangeCardDef = async (event, idx) => {
    const def = event.target.value;
    let cards = [...this.state.cards];
    let newCard = { ...cards[idx] };
    newCard.description = def;
    cards[idx] = newCard;
    this.setState({ cards });
  };

  handleChangeInputName = async (event) => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleInsertStudySet = () => {
    let { title, cards } = this.state;
    api.insertStudySet(title, cards).then((res) => {
      this.setState({
        title: "",
        cards: [{ term: "", description: "" }],
      });
    });
  };

  deleteCard = (i) => {
    let currentCards = [...this.state.cards];
    currentCards.splice(i, 1);
    this.setState({ cards: currentCards });
  };

  addCard = (e) => {
    this.setState((prevState) => ({
      cards: [...prevState.cards, { term: "", description: "" }],
    }));
  };

  render() {
    let { title, cards } = this.state;
    return (
      <div>
        <TextField
          onChange={this.handleChangeInputName}
          name="title"
          id="title"
          value={title}
          placeholder="Untitled List"
        />

        <CardInputs
          cards={cards}
          removeItem={this.deleteCard}
          changeTerm={this.handleChangeCardTerm}
          changeDef={this.handleChangeCardDef}
        />
        <Button onClick={this.addCard}>
          <AddIcon />
        </Button>

        <Button onClick={this.handleInsertStudySet}>Add StudySet</Button>
      </div>
    );
  }
}

export default StudySetInsert;

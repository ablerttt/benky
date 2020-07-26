import React, { Component } from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
// import Button from "@material-ui/core/Button";

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 0 30px;
`;

const Label = styled.label`
  margin: 5px;
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

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

  handleChangeInputTime = async (event) => {
    const time = event.target.value;
    this.setState({ time });
  };

  handleInsertStudySet = () => {
    let { title, cards } = this.state;
    window.alert(`Insert with title ${title} and cards ${cards}`);
    api.insertStudySet(title, cards).then((res) => {
      window.alert(`StudySet inserted successfully with response ${res}`);
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
      cards: [...prevState.cards, { name: "", age: "" }],
    }));
  };

  render() {
    let { title, cards } = this.state;
    return (
      <Wrapper>
        <Title>
          <TextField
            onChange={this.handleChangeInputName}
            name="title"
            id="title"
            value={title}
            placeholder="Untitled List"
          />
        </Title>

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
        {/* <CancelButton href={"/home"}>Cancel</CancelButton> */}
      </Wrapper>
    );
  }
}

export default StudySetInsert;

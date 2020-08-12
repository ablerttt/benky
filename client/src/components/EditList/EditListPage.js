import React from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import LoadingPage from "./LoadingList";

class EditListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      id: props.id,
      title: "",
      cards: [],
    };
  }

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        var set = res.data.data;
        this.setState({
          title: set.title,
          cards: set.cards,
        });
      })
      .catch((e) => {
        console.log(e);
      });

    this.setState({ render: true });
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

  handleUpdateStudySet = () => {
    let { id, title, cards } = this.state;
    api.updateStudySetById(id, title, cards).then((res) => {
      window.alert(`StudySet updated successfully with response ${res}`);
    });
  };

  render() {
    const { title, cards, render } = this.state;
    let returnedState = <LoadingPage />;
    if (render) {
      returnedState = (
        <div>
          <TextField
            varient="outlined"
            onChange={this.handleChangeInputName}
            name="title"
            id="title"
            value={title}
            placeholder="Untitled List"
          />
          <br />

          <CardInputs
            cards={cards}
            removeItem={this.deleteCard}
            changeTerm={this.handleChangeCardTerm}
            changeDef={this.handleChangeCardDef}
          />

          <Button onClick={this.addCard}>
            <AddIcon />
          </Button>

          <Button onClick={this.handleUpdateStudySet}>Update StudySet</Button>
        </div>
      );
    }

    return returnedState;
  }
}

export default EditListPage;

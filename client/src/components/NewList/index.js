import React from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "../../constants/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

class StudySetInsert extends React.Component {
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
    const { title, cards } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h3" className={classes.intro} gutterBottom>
          Create a New Set
        </Typography>
        <Typography variant="h5">
          <TextField
            className={classes.titleTextField}
            onChange={this.handleChangeInputName}
            name="title"
            id="title"
            value={title}
            placeholder="Untitled List"
          />
        </Typography>

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

export default withStyles(styles)(StudySetInsert);

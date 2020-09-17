import React from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "./CreateDialog";
import InvalidDialog from "./InvalidDialog";
import { Link } from "react-router-dom";

class StudySetInsert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      cards: [{ term: "", description: "" }],
      showDialog: false,
      showInvalidDialog: false,
      id: "",
    };
  }

  checkValid = (title, cards) => {
    var terms = [];
    var errs = [];
    if (title === "") {
      errs.push("a");
    }
    for (let i = 0; i < cards.length; i++) {
      var cardError = `${i}`;
      if (cards[i].term === "") {
        cardError += "t";
      }
      if (cards[i].description === "") {
        cardError += "d";
      }
      if (terms.includes(cards[i].term)) {
        cardError += "m";
      }
      if (cardError !== `${i}`) {
        errs.push(cardError);
      } else {
        terms.push(cards[i].term);
      }
    }
    return errs;
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

  trimWhiteSpace = () => {
    let { title, cards } = this.state;
    title = title.trim();
    for (let i = 0; i < cards.length; i++) {
      cards[i].term = cards[i].term.trim();
      cards[i].description = cards[i].description.trim();
    }
    this.setState({ title: title, cards: cards });
  };

  validateSet = async (title) => {
    console.log("Check validate set with " + title);
    let valid = true;
    await api
      .checkTitleExists(title)
      .then((res) => {
        console.log(res);
        if (res.data.valid && res.data.success) {
        } else {
          valid = false;
        }
      })
      .catch((error) => {
        console.log("Error while validating set title: " + error);
        valid = false;
      });
    return valid;
  };

  handleInsertStudySet = async () => {
    this.trimWhiteSpace();
    let { title, cards } = this.state;
    let errors = this.checkValid(title, cards);
    let validateResult = await this.validateSet(title);
    if (!validateResult) {
      errors.unshift("e");
    }

    if (errors.length > 0) {
      this.setState({ showInvalidDialog: true, errors: errors });
      return;
    }

    api
      .insertStudySet(title, cards)
      .then((res) => {
        this.setState({
          id: res.data.id,
          showDialog: true,
        });
      })
      .catch((e) => {
        console.log(e);
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

  closeInvalid = () => {
    this.setState({ showInvalidDialog: false });
  };

  render() {
    const {
      title,
      cards,
      showDialog,
      showInvalidDialog,
      id,
      errors,
    } = this.state;
    const { classes } = this.props;
    return (
      <div id="newset">
        <Typography variant="h4" gutterBottom className={classes.intro}>
          Create a New Set
        </Typography>
        <Card className={classes.titleCard} raised>
          <TextField
            className={classes.titleTextField}
            onChange={this.handleChangeInputName}
            name="title"
            id="title"
            autoFocus
            InputProps={{
              classes: {
                input: classes.titleResize,
              },
            }}
            label="Title"
            value={title}
            placeholder="Untitled List"
          />
        </Card>
        <CardInputs
          cards={cards}
          removeItem={this.deleteCard}
          changeTerm={this.handleChangeCardTerm}
          changeDef={this.handleChangeCardDef}
        />
        <div>
          <Button
            onClick={this.addCard}
            className={classes.primaryLightButton}
            variant="contained"
          >
            <AddIcon />
          </Button>
          <Button
            onClick={this.handleInsertStudySet}
            className={classes.primaryDarkButton}
            variant="contained"
          >
            Create
          </Button>
        </div>

        <CreateDialog
          showDialog={showDialog}
          id={id}
          escDialog={() => this.setState({ showDialog: false })}
        />
        <InvalidDialog
          showDialog={showInvalidDialog}
          closeInvalidDialog={this.closeInvalid}
          errors={errors}
          cards={cards}
          escInvalidDialog={() => this.setState({ showInvalidDialog: false })}
        />
      </div>
    );
  }
}

class NewLinkBase extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          component={Link}
          to={`/newset`}
          className={classes.primaryLightButton}
          variant="contained"
        >
          Create
        </Button>
      </div>
    );
  }
}

const NewSetLink = withStyles(styles)(NewLinkBase);

export default withStyles(styles)(StudySetInsert);

export { NewSetLink };

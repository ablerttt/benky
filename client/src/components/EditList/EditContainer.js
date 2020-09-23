import React from "react";
import api from "../../api";
import CardInputs from "./CardInputs";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "./CreateDialog";
import InvalidDialog from "./InvalidDialog";
import Card from "@material-ui/core/Card";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import NotFoundPage from "../../pages/404";

class EditContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      validSet: true,
      id: props.id,
      title: "",
      oldtitle: "",
      cards: [],
      showDialog: false,
      showInvalidDialog: false,
      valid: true,
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

  trimWhiteSpace = () => {
    let { title, cards } = this.state;
    title = title.trim();
    for (let i = 0; i < cards.length; i++) {
      cards[i].term = cards[i].term.trim();
      cards[i].description = cards[i].description.trim();
    }
    this.setState({ title: title, cards: cards });
  };

  closeInvalid = () => {
    this.setState({ showInvalidDialog: false });
  };

  closeValid = () => {
    this.setState({ showDialog: false });
  };

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        var currentTime = new Date().getTime();
        while (currentTime + 300 >= new Date().getTime()) {}
        if (res.data.success && res.data.valid) {
          var set = res.data.data;

          this.setState({
            title: set.title,
            oldtitle: set.title,
            cards: set.cards,
            render: true,
            validSet: true,
          });
        } else {
          this.setState({ render: true, validSet: false });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ render: true, validSet: false });
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

  validateSet = async (title) => {
    let valid = true;
    const oldtitle = this.state.oldtitle;
    await api
      .checkTitleExists(title)
      .then((res) => {
        console.log(res);
        if (
          (res.data.valid && res.data.success) ||
          (res.data.success && !res.data.valid && title === oldtitle)
        ) {
          this.setState({ valid: true });
        } else {
          this.setState({ valid: false });
        }
      })
      .catch((error) => {
        console.log("Error while validating set title: " + error);
        this.setState({ valid: false });
      });
    return valid;
  };

  handleUpdateStudySet = async () => {
    this.trimWhiteSpace();
    let { id, title, cards } = this.state;
    let errors = await this.checkValid(title, cards);
    let validateResult = await this.validateSet(title);
    if (!validateResult) {
      errors.unshift("e");
    }

    if (errors.length > 0) {
      this.setState({ showInvalidDialog: true, errors: errors });
      return;
    }
    api
      .updateStudySetById(id, title, cards)
      .then((res) => {
        this.setState({ showDialog: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const {
      title,
      cards,
      render,
      showDialog,
      showInvalidDialog,
      id,
      validSet,
      errors,
    } = this.state;
    const { classes } = this.props;

    const override = css`
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
    `;

    let returnedState = (
      <PulseLoader css={override} size={25} color="#58b1d6" loading={true} />
    );

    if (render && validSet) {
      returnedState = (
        <div>
          <Typography variant="h4" gutterBottom className={classes.intro}>
            Edit set
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
                  input: classes.input,
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
              onClick={this.handleUpdateStudySet}
              className={classes.primaryDarkButton}
              variant="contained"
            >
              Update
            </Button>
          </div>

          <CreateDialog
            showDialog={showDialog}
            closeDialog={this.closeValid}
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
    } else if (render && !validSet) {
      returnedState = <NotFoundPage />;
    }
    return returnedState;
  }
}

export default withStyles(styles)(EditContainer);
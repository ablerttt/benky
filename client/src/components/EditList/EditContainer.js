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
import firebase from "firebase/app";

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
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api
          .getStudySetById(this.state.id, {
            headers: { authorization: `Bearer ${idToken}` },
          })
          .then((res) => {
            console.log(res);
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
          });
      })
      .catch((e) => {
        console.log("Error while getting study set.");
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

  validateTitle = (title) => {
    const { id } = this.state;

    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api.checkTitleExists({
          headers: {
            title: title,
            authorization: `Bearer ${idToken}`,
            orig_id: id,
          },
        });
      });
  };

  handleUpdateStudySet = async () => {
    this.trimWhiteSpace();
    let { id, title, cards } = this.state;
    let errors = this.checkValid(title, cards);
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api
          .checkTitleExists({
            headers: {
              title: title,
              authorization: `Bearer ${idToken}`,
              orig_id: id,
            },
          })
          .then((res) => {
            if (res.data.valid && res.data.success) {
              this.setState({ valid: true });
            } else {
              this.setState({ valid: false });
              errors.unshift("e");
            }

            if (errors.length > 0) {
              this.setState({ showInvalidDialog: true, errors: errors });
              return;
            }

            // api
            //   .updateStudySetById(id, {
            //     headers: {
            //       title: title,
            //       authorization: `Bearer ${idToken}`,
            //       cards: cards,
            //     },
            //   })
            //   .then((res) => {
            //     this.setState({ showDialog: true });
            //     return;
            //   });

            this.update(id, title, idToken, cards).then((res) => {
              console.log(res);
              this.setState({ showDialog: true });
            });
          });
      })
      .catch((error) => {
        console.log("Failed!!!");
        console.log(error);
      });
  };

  update = async (id, title, idToken, cards) => {
    await api.updateStudySetById(id, {
      headers: {
        title: title,
        authorization: `Bearer ${idToken}`,
        cards: cards,
      },
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

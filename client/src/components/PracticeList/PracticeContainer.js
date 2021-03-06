import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Box from "@material-ui/core/Box";
import TermCard from "./TermCard";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpDialog from "./HelpDialog";
import EmptySet from "../../pages/EmptySet";

function shuffleList(array) {
  array.sort(() => Math.random() - 0.5);
}

class PracticeContainer extends React.Component {
  constructor(props) {
    super(props);
    var len = props.cards.length;

    this.state = {
      title: props.title,
      cards: props.cards,
      len: len,
      shuffle: false,
      indices: Array.from({ length: len }, (_, index) => index),
      index: 0,
      flipped: Array(len).fill(false),
      openDialog: false,
    };
  }

  logKeyDown = (e) => {
    const { index, len, flipped, shuffle } = this.state;
    if (e.key === "ArrowLeft" && index > 0) {
      this.decreaseIndex();
    } else if (e.key === "ArrowRight" && index < len - 1) {
      this.increaseIndex();
    } else if (e.key === " ") {
      this.toggleFlip(index);
    } else if (e.key === "ArrowDown" && !flipped[index]) {
      this.toggleFlip(index);
    } else if (e.key === "ArrowUp" && flipped[index]) {
      this.toggleFlip(index);
    } else if (e.key === "r" && !(index === 0 && shuffle)) {
      this.reset();
    } else if (e.key === "s") {
      this.handleShuffleOption();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.logKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.logKeyDown);
  }

  handleShuffleOption = () => {
    const { shuffle, cards } = this.state;
    const len = cards.length;

    var ind = Array.from({ length: len }, (_, index) => index);

    if (!shuffle) {
      shuffleList(ind);
      this.setState({ indices: ind });
    } else {
      this.reset();
    }

    this.setState({
      shuffle: !shuffle,
      index: 0,
      flipped: Array(len).fill(false),
    });
    this.forceUpdate();
  };

  increaseIndex = () => {
    this.setState((state) => {
      return { index: state.index + 1 };
    });
  };

  decreaseIndex = () => {
    this.setState((state) => {
      return { index: state.index - 1 };
    });
  };

  reset = () => {
    const len = this.state.cards.length;
    this.setState(() => {
      return {
        index: 0,
        flipped: Array(len).fill(false),
        shuffle: false,
        indices: Array.from({ length: len }, (_, index) => index),
      };
    });
  };

  toggleFlip = (i) => {
    var { flipped } = this.state;
    flipped[i] = !flipped[i];
    this.setState({ flipped });
  };

  render() {
    const { classes } = this.props;
    const { title, cards, shuffle, index, openDialog } = this.state;
    var { indices, flipped } = this.state;

    return (
      <div>
        <Grid container justify="space-between">
          <Typography className={classes.intro} variant="h5">
            Practice: {title}
          </Typography>

          {cards.length > 0 && (
            <div className={classes.intro}>
              Shuffle
              <Switch
                checked={shuffle}
                onChange={this.handleShuffleOption}
                name="shuffleOption"
                inputProps={{ "aria-label": "shuffle-option" }}
              />
              <Button
                style={{ align: "right" }}
                className={classes.primaryLightButton}
                onClick={this.reset}
                variant="contained"
                disabled={index === 0 && !shuffle && !flipped.includes(true)}
              >
                Reset
              </Button>
              <Button
                style={{ align: "right" }}
                className={classes.primaryLightButton}
                variant="contained"
                onClick={() => this.setState({ openDialog: true })}
              >
                Help!
              </Button>
            </div>
          )}
        </Grid>
        {cards.length > 0 && (
          <Fab
            color="primary"
            aria-label="add"
            className={classes.practiceLeftFab}
            size="large"
            disabled={index === 0}
            onClick={() => this.decreaseIndex()}
          >
            <NavigationIcon />
          </Fab>
        )}
        {cards.length > 0 && (
          <Fab
            color="primary"
            aria-label="add"
            className={classes.practiceRightFab}
            size="large"
            disabled={index === indices.length - 1}
            onClick={() => this.increaseIndex()}
          >
            <NavigationIcon />
          </Fab>
        )}
        {cards.length > 0 && (
          <Box height="65vh">
            <TermCard
              cards={cards}
              indices={indices}
              index={index}
              showDef={flipped[index]}
              toggleFlip={() => this.toggleFlip(index)}
            />
          </Box>
        )}
        {cards.length > 0 && (
          <HelpDialog
            showDialog={openDialog}
            escDialog={() => this.setState({ openDialog: false })}
          />
        )}
        {cards.length === 0 && <EmptySet id={this.props.id} />}
      </div>
    );
  }
}

export default withStyles(styles)(PracticeContainer);

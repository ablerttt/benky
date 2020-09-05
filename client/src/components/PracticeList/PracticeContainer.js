import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";
import Switch from "@material-ui/core/Switch";
import Slide from "@material-ui/core/Slide";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";
import Box from "@material-ui/core/Box";
import TermCard from "./TermCard";
import Button from "@material-ui/core/Button";

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
      shuffle: false,
      indices: Array.from({ length: len }, (_, index) => index),
      index: 0,
      flipped: Array(len).fill(false),
    };
  }

  handleShuffleOption = (e) => {
    e.preventDefault();
    const { shuffle, cards } = this.state;
    const len = cards.length;

    var ind = Array.from({ length: len }, (_, index) => index);

    if (!shuffle) {
      shuffleList(ind);
      this.setState({ indices: ind });
    } else {
      this.setState({ indices: ind });
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
    console.log("Toggle Flip for index " + i);
    var { flipped } = this.state;
    flipped[i] = !flipped[i];
    this.setState({ flipped });
  };

  render() {
    const { classes } = this.props;
    const { title, cards, shuffle, index } = this.state;
    var { indices, flipped } = this.state;
    return (
      <div>
        <Typography className={classes.intro} variant="h5">
          Practice: {title}
        </Typography>
        <div>
          Shuffle
          <Switch
            checked={shuffle}
            onChange={this.handleShuffleOption}
            name="shuffleOption"
            inputProps={{ "aria-label": "shuffle-option" }}
          />
          <Button
            className={classes.primaryLightButton}
            onClick={this.reset}
            variant="contained"
          >
            Reset
          </Button>
        </div>
        {indices}
        Current index: {index}
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
        <Box height="60vh">
          <TermCard
            cards={cards}
            indices={indices}
            index={index}
            showDef={flipped[index]}
            toggleFlip={() => this.toggleFlip(index)}
          />
        </Box>
      </div>
    );
  }
}

export default withStyles(styles)(PracticeContainer);

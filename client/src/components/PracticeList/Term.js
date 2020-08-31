import React from "react";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import NavigationIcon from "@material-ui/icons/Navigation";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import Slide from "@material-ui/core/Slide";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

function shuffleList(array) {
  array.sort(() => Math.random() - 0.5);
}

const TermsW = (props) => {
  const { cards, shuffle } = props;
  let indices = [];
  let unsortedindices = [];

  for (let i = 0; i < cards.length; i++) {
    indices.push(i);
    unsortedindices.push(i);
  }

  if (shuffle) {
    shuffleList(indices);
    console.log(indices);
  } else {
    console.log(indices);
  }

  return (
    <TermView
      indices={shuffle ? indices : unsortedindices}
      styles={styles}
      {...props}
    />
  );
};

class TermView extends React.Component {
  constructor(props) {
    super(props);

    const { indices, cards } = props;
    console.log("Term view indices: " + indices);

    this.state = {
      indices: indices,
      cards: cards,
      index: 0,
    };
  }

  increaseIndex = () => {
    console.log("INCREASE from " + this.state.index);
    this.setState((state) => {
      return { index: state.index + 1 };
    });
  };

  decreaseIndex = () => {
    console.log("DECREASE from " + this.state.index);
    this.setState((state) => {
      return { index: state.index - 1 };
    });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  render() {
    const { cards } = this.state;
    var { index } = this.state;
    const { classes, indices } = this.props;
    return (
      <div>
        <Typography>Current index: {index}</Typography>
        {indices}
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
          <Paper variant="elevation" className={classes.practiceCard}>
            <div style={{ margin: "auto" }}>
              <Typography
                variant="h3"
                align="justify"
                gutterBottom
                className={classes.practiceCardTerm}
              >
                {cards[indices[index]].term}
              </Typography>

              <Button
                className={`${classes.primaryLightButton} ${classes.practiceRevealDescription}`}
                variant="contained"
              >
                Description
              </Button>
            </div>
          </Paper>
        </Box>
      </div>
    );
  }
}

const Terms = withStyles(styles)(TermsW);

export default Terms;

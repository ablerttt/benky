import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import TestQuestion from "./TestQuestion";
import Typography from "@material-ui/core/Typography";

function shuffleList(array) {
  array.sort(() => Math.random() - 0.5);
}

class TestContainer extends React.Component {
  constructor(props) {
    super(props);
    var len = props.cards.length;
    var indices = Array.from(
      { length: props.cards.length },
      (_, index) => index
    );
    var questions = this.chooseQuestions(indices);
    shuffleList(indices);

    this.state = {
      cards: props.cards,
      len: props.cards.length,
      questions: questions,
      indices: Array.from({ length: props.cards.length }, (_, index) => index),
      shuffled: indices,
    };
  }

  chooseQuestions = (indices) => {
    var result = [];
    for (let i = 0; i < indices.length; i++) {
      var current = [];
      var dupe = indices.slice();
      dupe.splice(i, 1);
      shuffleList(dupe);
      current.push(i);
      var otherOptions = dupe.slice(0, 4);
      otherOptions.push(i);
      current.push(otherOptions);
      result.push(current);
    }

    return result;
  };

  render() {
    const { classes } = this.props;
    const { questions, indices, cards, shuffled } = this.state;
    return (
      <div>
        {console.log(cards)}
        {shuffled.map((i, val) => {
          return (
            <TestQuestion
              key={val}
              cards={cards}
              index={i}
              questions={questions}
            />
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(TestContainer);

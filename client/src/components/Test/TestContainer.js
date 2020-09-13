import React from "react";
import TestQuestion from "./TestQuestion";
import SubmitDialog from "./SubmitDialog";

function shuffleList(array) {
  array.sort(() => Math.random() - 0.5);
}

class TestContainer extends React.Component {
  constructor(props) {
    super(props);
    var len = props.cards.length;
    var indices = Array.from({ length: len }, (_, index) => index);
    var questions = this.chooseQuestions(indices);

    shuffleList(indices);

    this.state = {
      cards: props.cards,
      len: props.cards.length,
      questions: questions,
      indices: Array.from({ length: len }, (_, index) => index),
      shuffled: indices,
      selectedAnswers: Array.from({ length: len }, (_, index) => -1),
      submitted: false,
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.logKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.logKeyDown);
  }

  logKeyDown = (e) => {
    const { submitted } = this.state;
    console.log(e.key);
    if (submitted && e.key === "Escape") {
      this.setState({ submitted: false });
    }
  };

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

  updateAnswer = (count, entry) => {
    var currentState = this.state.selectedAnswers;
    currentState[count] = entry;
    this.setState({ selectedAnswers: currentState });
    console.log(currentState);
  };

  onSubmit = () => {
    this.setState({ submitted: true });
    console.log("submit");
  };

  render() {
    const {
      questions,
      cards,
      shuffled,
      indices,
      selectedAnswers,
      submitted,
    } = this.state;
    return (
      <div>
        {indices.map((i) => {
          return (
            <TestQuestion
              key={i}
              cards={cards}
              count={i}
              index={shuffled[i]}
              questions={questions}
              selected={selectedAnswers[i][1]}
              updateAnswer={this.updateAnswer}
              submitted={submitted}
            />
          );
        })}
        <SubmitDialog
          onSubmit={this.onSubmit}
          showDialog={submitted}
          answers={selectedAnswers}
          closeDialog={() => this.setState({ submitted: false })}
        />
      </div>
    );
  }
}

export default TestContainer;

import React from "react";
import TestQuestion from "./TestQuestion";
import SubmitDialog from "./SubmitDialog";
import api from "../../api";
import { processTest } from "./processTest";
import { withRouter } from "react-router-dom";
import firebase from "firebase/app";

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
      submittedDialog: false,
      id: props.id,
      title: props.title,
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
      shuffleList(otherOptions);
      current.push(otherOptions);
      result.push(current);
    }

    return result;
  };

  updateAnswer = (count, entry) => {
    var currentState = this.state.selectedAnswers;
    currentState[count] = entry;
    this.setState({ selectedAnswers: currentState });
  };

  onSubmit = async () => {
    this.setState({ submittedDialog: false });

    const { shuffled, questions, cards, selectedAnswers, id } = this.state;
    var { title } = this.state;

    var sortedQuestions = [];
    for (let i = 0; i < shuffled.length; i++) {
      sortedQuestions.push(questions[shuffled[i]]);
    }

    var processedResult = processTest(cards, sortedQuestions, selectedAnswers);

    let resultID = "";

    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api
          .getTestResultTitles({
            headers: { authorization: `Bearer ${idToken}` },
          })
          .then((res) => {
            if (!res.data.empty) {
              console.log(res.data.data);
              var existing = res.data.data;
              for (let i = 0; i < existing.length; i++) {
                existing[i] = existing[i]["title"];
              }
              existing = existing.filter((c, index) => {
                return existing.indexOf(c) === index;
              });

              if (existing.indexOf(title) >= 0) {
                var newTitle = "";
                for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
                  var tempTitle = `${title} (${i})`;
                  console.log(
                    "testing for " +
                      tempTitle +
                      " " +
                      existing.indexOf(tempTitle)
                  );
                  if (existing.indexOf(tempTitle) === -1) {
                    newTitle = tempTitle;
                    break;
                  }
                }

                title = newTitle;
                console.log("set on the new title " + title + newTitle);
              }
            }

            api
              .insertTestResult({
                headers: {
                  authorization: `Bearer ${idToken}`,
                  id: id,
                  title: title,
                  date: new Date(),
                  testresult: processedResult,
                },
              })
              .then((res) => {
                console.log(res);
                resultID = res.data.id;
                if (resultID === "") {
                  console.log("INVALID ID");
                  return;
                }

                this.props.history.push(`/testresult/${resultID}`);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };

  render() {
    const {
      questions,
      cards,
      shuffled,
      indices,
      selectedAnswers,
      submittedDialog,
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
              submitted={submittedDialog}
            />
          );
        })}
        <SubmitDialog
          onSubmit={this.onSubmit}
          showDialog={submittedDialog}
          answers={selectedAnswers}
          closeDialog={() => this.setState({ submittedDialog: false })}
          openDialog={() => this.setState({ submittedDialog: true })}
        />
      </div>
    );
  }
}

export default withRouter(TestContainer);

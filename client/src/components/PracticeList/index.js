import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import ViewCards from "./ViewCards";
import { Redirect } from "react-router-dom";
import PracticeContainer from "./PracticeContainer"

class PracticeSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      checked: false,
    };
  }

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        console.log("Response is: " + res);
        if (res.data.success && res.data.data != null) {
          this.setState({
            valid: true,
            title: res.data.title,
            cards: res.data.cards,
            checked: true,
          });
        } else {
          this.setState({ valid: false, checked: true });
        }
      })
      .catch((e) => {
        console.log("Error is " + e);
        this.setState({ valid: false, checked: true });
      });
  };

  render() {
    let { valid, title, cards, checked } = this.state;
    let renderContainer = <div>Loading!</div>;

    if (checked && valid) {
      renderContainer = <PracticeContainer title={title} cards={cards} />
    } else if (checked && !valid) {
      renderContainer = <Redirect to="/404" />;
    }

    return renderContainer;
  }
}

class PracticeLink extends React.Component {
  practiceSet = (e) => {
    e.preventDefault();

    window.location.href = `/p/${this.props.id}`;
  };

  render() {
    return (
      <Button
        onClick={this.practiceSet}
        size={this.props.size}
        color={this.props.color}
      >
        Practice
      </Button>
    );
  }
}

export { PracticeLink };

export default withStyles(styles)(PracticeSet);

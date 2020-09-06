import React from "react";
import Button from "@material-ui/core/Button";
import api from "../../api";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import PracticeContainer from "./PracticeContainer";
import NotFoundPage from "../../pages/404";

class PracticeSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      checked: false,
    };
  }

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        console.log(res);
        if (res.data.success && res.data.data != null) {
          this.setState({
            valid: true,
            title: res.data.data.title,
            cards: res.data.data.cards,
            checked: true,
          });
        } else {
          this.setState({ valid: false, checked: true });
        }
      })
      .catch((e) => {
        // console.log("Error is " + e);
        this.setState({ valid: false, checked: true });
      });
  };

  render() {
    let { valid, title, cards, checked } = this.state;
    let renderContainer = <div>Loading!</div>;

    if (checked && valid) {
      renderContainer = <PracticeContainer title={title} cards={cards} />;
    } else if (checked && !valid) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

class PracticeLinkBase extends React.Component {
  practiceSet = (e) => {
    e.preventDefault();

    window.location.href = `/p/${this.props.id}`;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.practiceSet}
          color="primary"
          className={classes.primaryLightButton}
          variant="contained"
        >
          Practice
        </Button>
      </div>
    );
  }
}

const PracticeLink = withStyles(styles)(PracticeLinkBase);

export { PracticeLink };

export default withStyles(styles)(PracticeSet);

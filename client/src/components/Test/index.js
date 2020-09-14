import React from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import LoadingPage from "../EditList/LoadingList";
import NotFoundPage from "../../pages/404";
import EmptySet from "../../pages/EmptySet";
import styles from "../../constants/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TestContainer from "./TestContainer";

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false,
      id: this.props.match.params.id,
      valid: false,
      checked: false,
    };
  }

  componentDidMount = async () => {
    await api
      .getStudySetById(this.state.id)
      .then((res) => {
        if (res.data.success && res.data.valid) {
          this.setState({
            valid: true,
            title: res.data.data.title,
            cards: res.data.data.cards,
          });
        } else {
          this.setState({ valid: false });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    this.setState({ checked: true });
  };

  render() {
    let renderContainer = <LoadingPage />;
    const { classes } = this.props;
    const { valid, cards, title, checked, id } = this.state;
    if (valid) {
      renderContainer = (
        <div>
          <Typography className={classes.intro} variant="h5">
            Test: <strong>{title}</strong>
          </Typography>
          {cards.length === 0 && <EmptySet id={id} />}
          {cards.length > 0 && (
            <TestContainer cards={cards} id={id} title={title} />
          )}
        </div>
      );
    } else if (valid) {
      renderContainer = <EmptySet title={title} />;
    } else if (!valid && checked) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

class TestLinkBase extends React.Component {
  testSet = (e) => {
    e.preventDefault();

    window.location.href = `/test/${this.props.id}`;
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button
          onClick={this.testSet}
          className={classes.primaryLightLimitedButton}
          variant="contained"
        >
          Test
        </Button>
      </div>
    );
  }
}

const TestsLink = withStyles(styles)(TestLinkBase);

export { TestsLink };

export default withStyles(styles)(Test);

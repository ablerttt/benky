import React from "react";
import api from "../../api";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LoadingPage from "../EditList/LoadingList";
import NotFoundPage from "../../pages/404";
import EmptySet from "../../pages/EmptySet";
import styles from "../../constants/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

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
        console.log(res);
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
          <Typography className={classes.intro} variant="h3">
            Test: {title}
          </Typography>
          {cards.length === 0 && <EmptySet id={id} />}
          {cards.length > 0 && <Typography variant="h2">Testing!!!</Typography>}
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

const TestLink = (props) => ({
  render() {
    return (
      <CardActionArea component={Link} to={`/test/${props.id}`}>
        <CardContent>
          <Typography variant="h5">{props.title}</Typography>
          <br />
          <Typography variant="body" gutterBottom>
            Last edited {props.updatedAt}
          </Typography>
        </CardContent>
      </CardActionArea>
    );
  },
});

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
          color="primary"
          className={classes.primaryLightButton}
          variant="contained"
        >
          Test
        </Button>
      </div>
    );
  }
}

const TestsLink = withStyles(styles)(TestLinkBase);

export { TestLink, TestsLink };

export default withStyles(styles)(Test);

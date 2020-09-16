import React from "react";
import Button from "@material-ui/core/Button";
import api from "../../api";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import PracticeContainer from "./PracticeContainer";
import NotFoundPage from "../../pages/404";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

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
    const { valid, title, cards, checked } = this.state;
    let renderContainer = <div>Loading!</div>;

    if (checked && valid) {
      renderContainer = <PracticeContainer title={title} cards={cards} />;
    } else if (checked && !valid) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

const PracticeLinkBase = (props) => {
  const { classes, length, id } = props;
  return (
    <div>
      {length >= 1 && (
        <Button
          component={Link}
          to={`/p/${id}`}
          className={classes.primaryLightLimitedButton}
          variant="contained"
        >
          Practice
        </Button>
      )}
      {length <= 0 && (
        <Tooltip title="This set is empty.">
          <Button
            disabled
            className={classes.primaryLightLimitedButton}
            variant="contained"
          >
            Practice
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

const PracticeLink = withStyles(styles)(PracticeLinkBase);

export { PracticeLink };

export default withStyles(styles)(PracticeSet);

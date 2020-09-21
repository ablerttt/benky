import React from "react";
import Button from "@material-ui/core/Button";
import api from "../../api";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import PracticeContainer from "./PracticeContainer";
import NotFoundPage from "../../pages/404";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import { Link } from "react-router-dom";
import { compose } from "recompose";
import { withAuthorization } from "../../auth/Session";

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
        var currentTime = new Date().getTime();
        while (currentTime + 300 >= new Date().getTime()) {}
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
        console.log("Error is " + e);
        this.setState({ valid: false, checked: true });
      });
  };

  render() {
    const { valid, title, cards, checked, id } = this.state;

    const override = css`
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
    `;

    let renderContainer = (
      <PulseLoader css={override} size={25} color="#58b1d6" loading={true} />
    );

    if (checked && valid) {
      renderContainer = (
        <PracticeContainer title={title} cards={cards} id={id} />
      );
    } else if (checked && !valid) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

const PracticeLinkBase = (props) => {
  const { classes, id } = props;
  return (
    <div>
      {/* {length >= 1 && ( */}
      <Button
        component={Link}
        to={`/p/${id}`}
        className={classes.primaryLightLimitedButton}
        variant="contained"
      >
        Practice
      </Button>
    </div>
  );
};

const condition = (authUser) => !!authUser;

const PracticeLink = withStyles(styles)(PracticeLinkBase);

export { PracticeLink };

export default compose(
  withStyles(styles),
  withAuthorization(condition)
)(PracticeSet);

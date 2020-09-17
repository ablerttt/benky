import React from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import NotFoundPage from "../../pages/404";
import EmptySet from "../../pages/EmptySet";
import styles from "../../constants/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TestContainer from "./TestContainer";
import Tooltip from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";

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

const TestLinkBase = (props) => {
  const { classes, length, id } = props;
  return (
    <div>
      {length > 1 && (
        <Button
          component={Link}
          to={`/test/${id}`}
          className={classes.primaryLightLimitedButton}
          variant="contained"
        >
          Test
        </Button>
      )}
      {length <= 0 && (
        <Tooltip
          title="This set does not have enough terms to test."
          style={{ padding: "0" }}
        >
          <Button
            disabled
            className={classes.primaryLightLimitedButton}
            variant="contained"
          >
            Test
          </Button>
        </Tooltip>
      )}
    </div>
  );
};

const TestsLink = withStyles(styles)(TestLinkBase);

export { TestsLink };

export default withStyles(styles)(Test);

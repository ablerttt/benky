import React from "react";
import { Prompt } from "react-router";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

class TestQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      count: this.props.count,
      submitted: this.props.submitted,
    };
  }

  // componentDidUpdate = () => {
  //   if (this.shouldBlockNavigation) {
  //     window.onbeforeunload = () => true;
  //   } else {
  //     window.onbeforeunload = undefined;
  //   }
  // };

  updateSelected = (i) => {
    if (this.state.selected === i) {
      this.setState({ selected: -1 });
      this.props.updateAnswer(this.state.count, -1);
    } else {
      this.setState({ selected: i });
      this.props.updateAnswer(this.state.count, i);
    }
  };

  // shouldBlockNavigation = () => {
  //   return !this.props.submitted;
  // };

  render() {
    const { classes, cards, questions, index, count } = this.props;
    return (
      <div>
        {/* <React.Fragment>
          <Prompt message="You have unsaved changes, are you sure you want to leave?" />
        </React.Fragment> */}
        <Card raised className={classes.testCard}>
          <CardContent className={classes.clearStyle}>
            <Typography variant="h6">
              {`${parseInt(count + 1)}. `}
              {"   "} {cards[index].term}
            </Typography>
            <br />
          </CardContent>
          <CardActions style={{ display: "inline" }}>
            {questions[index][1].map((num, selectIndex) => {
              return (
                <Button
                  color={
                    selectIndex === this.state.selected
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() => this.updateSelected(selectIndex)}
                  key={selectIndex}
                  className={classes.colortest}
                  variant="contained"
                >
                  {cards[num].description}
                </Button>
              );
            })}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(TestQuestion);

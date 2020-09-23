import React from "react";
// import { Prompt } from "react-router";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Paper from "@material-ui/core/Paper";

var classNames = require("classnames");

class TestQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      count: this.props.count,
      submitted: this.props.submitted,
    };
  }

  updateSelected = (i) => {
    if (this.state.selected === i) {
      this.setState({ selected: -1 });
      this.props.updateAnswer(this.state.count, -1);
    } else {
      this.setState({ selected: i });
      this.props.updateAnswer(this.state.count, i);
    }
  };

  render() {
    const { classes, cards, questions, index, count } = this.props;
    return (
      <div>
        <Card raised className={classes.testCard}>
          <CardContent className={classes.clearStyle}>
            <Typography variant="h6">
              {`${parseInt(count + 1)}. `}
              {"   "} {cards[index].term}
            </Typography>
            <br />
          </CardContent>
          <CardActionArea
            disableRipple
            style={{
              display: "inline",
              margin: "auto",
            }}
          >
            {questions[index][1].map((num, selectIndex) => {
              return (
                <Button
                  style={
                    selectIndex === this.state.selected
                      ? { backgroundColor: "#38598f", color: "white" }
                      : { backgroundColor: "#B3DBEF" }
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
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(TestQuestion);

import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Card from "@material-ui/core/Card";
// import Collapse from "@material-ui/core/Collapse";
// import Fade from "@material-ui/core/Fade";
import Switch from "@material-ui/core/Switch";
// import Slide from "@material-ui/core/Slide";
// import Fab from "@material-ui/core/Fab";
// import NavigationIcon from "@material-ui/icons/Navigation";
import Terms from "./Term";

class PracticeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      cards: props.cards,
      shuffle: false,
    };
  }

  handleShuffleOption = (e) => {
    const { shuffle } = this.state;
    this.setState({ shuffle: !shuffle });
  };

  render() {
    const { classes } = this.props;
    const { title, cards, shuffle } = this.state;
    return (
      <div>
        <Typography className={classes.intro} variant="h5">
          Practice: {title}
        </Typography>
        <div>
          Shuffle
          <Switch
            checked={shuffle}
            onChange={this.handleShuffleOption}
            name="shuffleOption"
            inputProps={{ "aria-label": "shuffle-option" }}
          />
        </div>
        <Terms cards={cards} shuffle={shuffle} />
      </div>
    );
  }
}

export default withStyles(styles)(PracticeContainer);

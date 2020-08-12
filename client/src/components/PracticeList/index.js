import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import api from "../../api";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";

class PracticeSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
    };
  }

  componentDidMount = async () => {
    await api
      .checkValidId(this.state.id)
      .then((res) => {
        if (res.data.success && res.data.valid) {
          this.setState({ valid: true });
        } else {
          this.setState({ valid: false });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <Typography variant="h3" className={classes.intro}>
        Practice
      </Typography>
    );
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

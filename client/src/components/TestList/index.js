import React from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import TestOptions from "./TestOptions";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";

class TestSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllStudySets().then((res) => {
      var items = res.data.data;
      this.setState({
        items,
      });
    });
  };

  render() {
    const { items } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h3" className={classes.intro} gutterBottom>
          Test your knowledge.
        </Typography>
        <Typography variant="h6" gutterBottom>
          I want to die
        </Typography>
        <TestOptions set={items} />
      </div>
    );
  }
}

export default withStyles(styles)(TestSet);

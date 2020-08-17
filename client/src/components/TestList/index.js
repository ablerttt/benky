import React from "react";
import api from "../../api";
import Typography from "@material-ui/core/Typography";
import TestOptions from "./TestOptions";

class TestSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllStudySets().then((res) => {
      console.log("Response: " + res);
      var items = res.data.data;
      this.setState({
        items,
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h3" gutterBottom>
          Test your knowledge.
        </Typography>
        <Typography variant="h6" gutterBottom>
          I want to die
        </Typography>
        <TestOptions set={this.state.items} />
      </div>
    );
  }
}

export default TestSet;

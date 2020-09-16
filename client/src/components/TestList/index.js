import React from "react";
import api from "../../api";
import TestOptions from "./TestOptions";

class TestSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      mounted: false,
    };
  }

  componentDidMount = async () => {
    await api.getTestResultTitles().then((res) => {
      this.setState({
        results: res.data.data,
        empty: res.data.empty,
        mounted: true,
      });
    });
  };

  render() {
    const { results, mounted, empty } = this.state;
    console.log("Current data is empty? " + empty);
    return (
      <div>
        {!mounted && <div>LOADING</div>}
        {mounted && empty && <div>EMPTY</div>}
        {mounted && !empty && <TestOptions testResults={results} />}
      </div>
    );
  }
}

export default TestSet;

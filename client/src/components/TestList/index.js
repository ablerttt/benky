import React from "react";
import api from "../../api";
import TestOptions from "./TestOptions";

class TestSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      mounted: false,
    };
  }

  componentDidMount = async () => {
    await api.getTestResults().then((res) => {
      console.log(res)
      this.setState({
        results: res.data.data,
        mounted: true,
      });
    });
  };

  render() {
    const { results, mounted } = this.state;
    return (
      <div>
        {!mounted && <div>LOADING</div>}
        {mounted && <TestOptions testResults={results} />}
      </div>
    );
  }
}

export default TestSet;

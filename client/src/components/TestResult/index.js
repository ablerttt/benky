import React from "react";
import api from "../../api";
import NotFoundPage from "../../pages/404";
import TestResultContainer from "./TestResultContainer";

class TestResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { verified: false, valid: true };
  }

  componentDidMount() {
    api
      .getTestResultById(this.props.match.params.id)
      .then((res) => {
        if (res.data.success && res.data.valid) {
          this.setState({
            valid: true,
            title: res.data.data.title,
            questionSet: res.data.data.questionSet.map((m) => m),
            dateTaken: res.data.data.dateTaken,
            setId: res.data.data.setId,
          });

          api.checkValidId(res.data.data.setId).then((res2) => {
            if (!(res2.data.success && res2.data.valid)) {
              this.setState({ gotoLink: false });
            } else {
              this.setState({ gotoLink: true });
            }
            this.setState({ verified: true });
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({ valid: false, verified: true });
      });
  }

  render() {
    const { verified, valid } = this.state;
    let renderContainer = <div>Loading!</div>;

    if (verified && valid) {
      const { title, questionSet, dateTaken, setId, gotoLink } = this.state;
      renderContainer = (
        <TestResultContainer
          title={title}
          questionSet={questionSet}
          setId={setId}
          dateTaken={dateTaken}
          gotoLink={gotoLink}
        />
      );
    } else if (verified) {
      renderContainer = <NotFoundPage />;
    }

    return renderContainer;
  }
}

export default TestResult;

import React from "react";
import api from "../../api";
import NotFoundPage from "../../pages/404";
import TestResultContainer from "./TestResultContainer";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import { withAuthorization } from "../../auth/Session";

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
            var currentTime = new Date().getTime();
            while (currentTime + 300 >= new Date().getTime()) {}
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

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(TestResult);

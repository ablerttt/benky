import React from "react";
import api from "../../api";
import TestOptions from "./TestOptions";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import NoTests from "../../pages/NoTests";
import { withAuthorization } from "../../auth/Session";
import firebase from "firebase/app";

class TestSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: {},
      mounted: false,
    };
  }

  componentDidMount = async () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api
          .getTestResultTitles({
            headers: { authorization: `Bearer ${idToken}` },
          })
          .then((res) => {
            var currentTime = new Date().getTime();
            while (currentTime + 300 >= new Date().getTime()) {}
            this.setState({
              results: res.data.data,
              empty: res.data.empty,
              mounted: true,
            });
          });
      });
  };

  render() {
    const { results, mounted, empty } = this.state;
    const override = css`
      display: flex;
      // flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      min-height: 100vh;
    `;

    let returnedState = (
      <PulseLoader css={override} size={25} color="#58b1d6" loading={true} />
    );

    if (mounted && empty) {
      returnedState = <NoTests />;
    } else if (mounted && !empty) {
      returnedState = <TestOptions testResults={results} />;
    }

    return returnedState;
  }
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(TestSet);

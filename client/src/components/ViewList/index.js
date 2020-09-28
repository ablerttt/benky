import React from "react";
import api from "../../api";
import { compose } from "recompose";
import { withFirebase } from "../../auth/Firebase";
import { withAuthorization } from "../../auth/Session";
import firebase from "firebase/app";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/core";
import ViewContainer from "./ViewContainer";
import * as SORT from "../../constants/sortItems";

class ViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expandedId: [],
      width: props.width,
      sort: "datenew",
      empty: false,
      verified: false,
      valid: false,
    };
  }

  componentDidMount = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then((idToken) => {
        api
          .getAllStudySets({ headers: { authorization: `Bearer ${idToken}` } })
          .then((res) => {
            var items = Object.entries(res.data.data);
            for (let i = 0; i < items.length; i++) {
              items[i] = items[i][1];
            }
            SORT.sortDateNew(items);
            this.setState({
              items,
              verified: true,
              valid: true,
            });

            if (items.length === 0) {
              this.setState({ empty: true, verified: true, valid: false });
            }
          });
      })
      .catch((e) => {
        console.log("Error while retrieving sets:");
        console.log(e);
        this.setState({ verified: true, valid: false });
      });
  };

  render() {
    const { items, expandedId, empty, verified, valid } = this.state;

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
      renderContainer = (
        <ViewContainer empty={empty} items={items} expandedId={expandedId} />
      );
    } else if (verified && !valid) {
      renderContainer = <div>Error message</div>;
    }

    return renderContainer;
  }
}

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition), withFirebase)(ViewList);

import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

function SignOut(props) {
  return (
    <div
      className="signout"
      onClick={() => {
        props.firebase.doSignOut().then(() => {
          props.history.push(ROUTES.LANDING);
        });
      }}
    >
      {props.children}
    </div>
  );
}

export default compose(withRouter, withFirebase)(SignOut);

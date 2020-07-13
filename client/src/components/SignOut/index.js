import React from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <Link onClick={firebase.doSignOut}>Logout</Link>
);

export default withFirebase(SignOutButton);

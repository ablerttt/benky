import React from "react";
import { Link } from "react-router-dom";
import NewSetForm from "./form";

import * as ROUTES from "../../constants/routes";

const NewSetPage = () => (
  <div>
    <NewSetForm />
  </div>
);

const NewSetMessage = () => (
  <p>
    <Link to={ROUTES.NEW_SET}>Create a new set here.</Link>
  </p>
);

// const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default NewSetPage;
export { NewSetMessage };

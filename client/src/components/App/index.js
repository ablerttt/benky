import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { AuthUserContext } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
// import NewSet from "../NewSet";
// import NewStudySet from "../NewStudySet";
import { StudySetInsert, StudySetUpdate } from "../NewList";
import ViewList from "../ViewList";

import * as ROUTES from "../../constants/routes";
import { withAuthentification } from "../Session";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.NEW_LIST} exact component={StudySetInsert} />
        <Route path={ROUTES.SHOW_LIST} exact component={ViewList} />
        <Route path={ROUTES.UPDATE_LIST} exact component={StudySetUpdate} />
      </div>
    </div>
  </Router>
);

export default withAuthentification(App);

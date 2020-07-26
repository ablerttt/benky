import React from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
// import { AuthUserContext } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import NotFoundPage from "../../pages/404";
import { StudySetInsert, StudySetUpdate } from "../NewList";
import ViewList from "../ViewList";

import * as ROUTES from "../../constants/routes";
import { withAuthentification } from "../Session";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
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
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default withAuthentification(App);

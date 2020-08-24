import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Navigation from "../Navigation";
import LandingPage from "../../pages/Landing";
import SignUpPage from "../../auth/SignUp";
import SignInPage from "../../auth/SignIn";
import PasswordForgetPage from "../../auth/PasswordForget";
import HomePage from "../../pages/Home";
import AccountPage from "../../auth/Account";
import AdminPage from "../../auth/Admin";
import NotFoundPage from "../../pages/404";
import StudySetInsert from "../../components/NewList";
import ViewList from "../../components/ViewList";
import EditList from "../../components/EditList";
import PracticeList from "../../components/PracticeList";
import TestSet from "../../components/TestList";
import Test from "../../components/Test";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as ROUTES from "../../constants/routes";
import { withAuthentification } from "../../auth/Session";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#38598f",
      light: "#436cab",
      dark: "#223757",
    },
    secondary: {
      main: "#89c6d9",
    },
    error: {
      main: "#d67665",
      light: "fcc2d4",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navigation />
      <Container maxWidth="md">
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.NEW_LIST} exact component={StudySetInsert} />
          <Route path={ROUTES.SHOW_LIST} component={ViewList} />
          <Route path={ROUTES.UPDATE_LIST} exact component={EditList} />
          <Route path={ROUTES.PRACTICE_LIST} component={PracticeList} />
          <Route path={ROUTES.TEST_LIST} exact component={TestSet} />
          <Route path={ROUTES.TEST} exact component={Test} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);

export default withAuthentification(App);

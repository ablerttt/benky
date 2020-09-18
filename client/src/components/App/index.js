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
import TestResult from "../../components/TestResult";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import * as ROUTES from "../../constants/routes";
import { withAuthentification } from "../../auth/Session";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  shadows: ["none"],
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
      light: "#58b1d6",
      lightHover: "#d6f3ff",
      dark: "#2878a1",
      darkHover: "#155d82",
      card: "#79c7e8",
      cardLight: "#d6f3ff",
    },
    secondary: {
      main: "#a0d2eb",
    },
    error: {
      main: "#f04a3e",
      light: "#fc7168",
    },
    highlight: {
      main: "#845bb3",
      light: "#bb67f5",
      dark: "#8043ab",
      accent: "#D0BDF4",
      accentLighter: "#e6d9ff",
    },
    background: {
      default: "#27282b",
    },
    text: {
      primary: "#fff",
      secondary: "#000",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <Navigation />
      <Container maxWidth="md" style={{ marginBottom: "1em" }}>
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
          <Route path={ROUTES.TEST_RESULT} exact component={TestResult} />
          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  </ThemeProvider>
);

export default withAuthentification(App);

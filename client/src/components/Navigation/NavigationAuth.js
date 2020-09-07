import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOut from "../../auth/SignOut/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./NavigationStyles";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

const NavigationAuth = (props) => {
  const { classes } = props;

  const routeToAccount = (e) => {
    e.preventDefault();

    props.history.push("/account");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="md">
          <Toolbar>
            <Link to={ROUTES.HOME} className={classes.title}>
              <Typography variant="h6">
                <strong>LOGO</strong>
              </Typography>
            </Link>
            <Button
              variant="contained"
              className={classes.right}
              onClick={routeToAccount}
            >
              Account
            </Button>
            <SignOut>
              <Button variant="contained" className={classes.right}>
                Log Out
              </Button>
            </SignOut>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default compose(withRouter, withStyles(styles))(NavigationAuth);

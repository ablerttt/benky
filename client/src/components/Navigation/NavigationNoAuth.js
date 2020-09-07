import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./NavigationStyles";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

const NavigationNoAuth = (props) => {
  const { classes } = props;

  const routeToSignIn = (e) => {
    e.preventDefault();

    props.history.push("/signin");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="md">
          <Toolbar>
            <Link to={ROUTES.LANDING} className={classes.title}>
              <Typography variant="h6">
                <strong>LOGO</strong>
              </Typography>
            </Link>
            <Button
              variant="contained"
              className={classes.right}
              onClick={routeToSignIn}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default compose(withRouter, withStyles(styles))(NavigationNoAuth);

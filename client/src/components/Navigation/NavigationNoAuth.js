import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./NavigationStyles";

const NavigationNoAuth = (props) => {
  const { classes } = props;
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
            <Link to={ROUTES.SIGN_IN}>
              <Button color="inherit" className={classes.right}>
                Login
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavigationNoAuth);

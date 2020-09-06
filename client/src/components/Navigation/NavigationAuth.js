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

const NavigationAuth = (props) => {
  const { classes } = props;
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
            <Link to={ROUTES.ACCOUNT}>
              <Button color="inherit" className={classes.right}>
                Account
              </Button>
            </Link>
            <SignOut>
              <Button color="inherit" className={classes.right}>
                Log Out
              </Button>
            </SignOut>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavigationAuth);

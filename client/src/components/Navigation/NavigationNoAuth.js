import React from "react";
import * as ROUTES from "../../constants/routes";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import styles from "./NavigationStyles";
import { Link } from "react-router-dom";

const NavigationNoAuth = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to={ROUTES.LANDING}
              className={classes.title}
            >
              <strong>LOGO</strong>
            </Typography>
            <Button
              variant="contained"
              className={`${classes.right} ${classes.highlightButton}`}
              component={Link}
              to={"/signin"}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(NavigationNoAuth);

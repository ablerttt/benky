import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOut from "../../auth/SignOut/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import useStyles from "./NavigationStyles";
import Typography from "@material-ui/core/Typography";

const NavigationAuth = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to={ROUTES.HOME} className={classes.title}>
            <Button color="inherit" className={classes.title}>
              <Typography variant="h6" className={classes.title}>
                Home Logo
              </Typography>
            </Button>
          </Link>
          <Link to={ROUTES.ACCOUNT}>
            <Button color="inherit" className={classes.right}>
              Account
            </Button>
          </Link>
          <SignOut>
            {/* <div className="navbar-item">
              <p>Log Out</p>
            </div> */}
            <Button color="inherit" className={classes.right}>
              Log Out
            </Button>
          </SignOut>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationAuth;

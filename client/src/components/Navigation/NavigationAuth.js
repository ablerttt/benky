import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOut from "../SignOut/index";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import useStyles from "./NavigationStyles";
import Typography from "@material-ui/core/Typography";

const NavigationAuth = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <AppBar position="static">
        <Toolbar>
          <Link to={ROUTES.HOME} className={classes.menuLink}>
            <Button color="inherit" className={classes.menuButton}>
              Home
            </Button>
          </Link>


          <div className>
            <Link to={ROUTES.ACCOUNT}>
              <Button color="inherit">Account</Button>
            </Link>
            <SignOutButton />
          </div>
        </Toolbar>
      </AppBar>
       */}
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}> */}
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
          {/* <SignOut>
            <Button color="inherit" className={classes.right}>
              Logout
            </Button>
          </SignOut> */}
          <SignOut>
            <div className="navbar-item">
              <p>Log Out</p>
            </div>
          </SignOut>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationAuth;

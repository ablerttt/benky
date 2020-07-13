import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    color: "white",
    height: 48,
    padding: "0px 20px",
    borderRadius: "30px",
    margin: "0px 10px",
    width: "120px",
    "&:hover": {
      background: "#0286AD",
    },
  },
  title: {
    flexGrow: 1,
  },
  menuLink: {
    underline: "none",
    color: "white",
    textDecoration: "none",
  },
}));

const NavigationNoAuth = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6">
          <Link to={ROUTES.LANDING} className={classes.menuLink}>
            <Button color="inherit" className={classes.menuButton}>
              Landing
            </Button>
          </Link>
          <Link to={ROUTES.ACCOUNT} className={classes.menuLink}>
            <Button color="inherit" className={classes.menuButton}>
              Account
            </Button>
          </Link>
          <Link to={ROUTES.ADMIN} className={classes.menuLink}>
            <Button color="inherit" className={classes.menuButton}>
              Admin
            </Button>
          </Link>
          <Link to={ROUTES.SIGN_IN} className={classes.menuLink}>
            <Button color="inherit" className={classes.menuButton}>
              Login
            </Button>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationNoAuth;

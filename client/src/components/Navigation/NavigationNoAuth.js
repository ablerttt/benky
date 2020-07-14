import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    marginBottom: theme.spacing.unit,
    background: "pink",
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: `${theme.spacing.unit * 3}px`,
  },
}));

const NavigationNoAuth = () => {
  const classes = useStyles();
  return (
    <AppBar style={{ margin: 0 }} position="static">
      <Toolbar>
        <Grid container spacing={24}>
          <Grid item xs={11}>
            <Typography type="title" color="inherit">
              <Grid item xs={6}>
                <Link to={ROUTES.LANDING} className={classes.menuLink}>
                  <Button color="inherit" className={classes.menuButton}>
                    Home
                  </Button>
                </Link>
              </Grid>
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <div>
              <Link to={ROUTES.SIGN_IN} className={classes.menuLink}>
                <Button color="inherit" className={classes.menuButton}>
                  Login
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationNoAuth;

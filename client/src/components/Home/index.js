import React from "react";
import "./home.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withAuthorization } from "../Session";
import { SignUpLink } from "../SignUp";
import { NewSetMessage } from "../NewSet";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Option from "./test";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: "300px",
    // margin: "30px 0",
    // display: "inline"
  },
}));

function HomePage(props) {
  const classes = useStyles();
  const [spacing] = React.useState(2);
  const options = ["Create a new set.", "Review.", "Study."];
  return (
    <div class="container">
      <h1>Welcome back.</h1>
      <p>What great thing will you do today?</p>
      <br />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={spacing}>
            {[0, 1, 2].map((value) => (
              <Grid key={value}>
                <Option title={options[value]} className={classes.paper} />
                {/* <Card className={classes.paper}>Test</Card> */}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export { useStyles };

export default withAuthorization(condition)(HomePage);

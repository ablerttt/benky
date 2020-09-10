import React from "react";
import { withAuthorization } from "../../auth/Session";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import * as ROUTES from "../../constants/routes";
import styles from "./styles";
import { compose } from "recompose";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const HomePage = (props) => {
  const { classes } = props;
  const options = ["Create a new set.", "Review.", "Test."];
  const links = [ROUTES.NEW_LIST, ROUTES.SHOW_LIST, ROUTES.TEST_LIST];
  const descriptions = [
    "Apply your knowledge of material to a new set.",
    "Practice your newfound knowledge to achieve memorization.",
    "You can do it! Try solving your questions and see how you do.",
  ];
  const inspo = [
    "Bring your ideas to life.",
    "Refresh.",
    "Put your knowledge to the test.",
  ];

  return (
    <div>
      <div className={classes.intro}>
        <Typography variant="h3" gutterBottom>
          Welcome back.
        </Typography>
        <Typography variant="h6" gutterBottom>
          What great thing will you do today?
        </Typography>
      </div>
      <Grid container className={classes.root} alignItems="stretch" spacing={3}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} lg={4} sm={6} xs={12}>
            <Card style={{ height: "100%" }}>
              <CardActionArea
                component={Link}  
                to={links[value]}
                style={{ height: "100%" }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {options[value]}
                  </Typography>
                  <Typography color="textSecondary">{inspo[value]}</Typography>
                  <br />
                  <br />
                  <Typography variant="body2" component="p">
                    {descriptions[value]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  withStyles(styles)
)(HomePage);

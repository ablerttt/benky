import React from "react";
import { withAuthorization } from "../../auth/Session";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import * as ROUTES from "../../constants/routes";
import styles from "../../constants/styles";
import { compose } from "recompose";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const HomePage = (props) => {
  const { classes } = props;
  const options = ["Create", "Practice", "Test Results"];
  const links = [ROUTES.NEW_LIST, ROUTES.SHOW_LIST, ROUTES.TEST_LIST];
  const descriptions = [
    "Apply your knowledge of material to a new set.",
    "Practice your newfound knowledge to achieve memorization.",
    "View your previous test results and find out what you got wrong!",
  ];
  return (
    <div>
      <div className={classes.intro}>
        <Typography variant="h4" gutterBottom>
          Welcome back.
        </Typography>
        <Typography gutterBottom>What's the game plan for today?</Typography>
      </div>
      <Grid container alignItems="stretch" direction="row" spacing={3}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} lg={4} sm={6} xs={12}>
            <Card className={classes.homeCard} style={{ height: "100%" }}>
              <CardActionArea
                component={Link}
                to={links[value]}
                style={{
                  height: "100%",
                }}
              >
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {options[value]}
                  </Typography>
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

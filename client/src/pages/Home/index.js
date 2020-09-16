import React from "react";
import { withAuthorization } from "../../auth/Session";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import * as ROUTES from "../../constants/routes";
// import styles from "./styles";
import styles from "../../constants/styles";
import { compose } from "recompose";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";

const HomePage = (props) => {
  const { classes } = props;
  const options = ["Create a new set.", "Review.", "View test results."];
  const links = [ROUTES.NEW_LIST, ROUTES.SHOW_LIST, ROUTES.TEST_LIST];
  const descriptions = [
    "Apply your knowledge of material to a new set.",
    "Practice your newfound knowledge to achieve memorization.",
    "View your previous test results and find out what you got wrong!",
  ];
  const inspo = [
    "Bring your ideas to life.",
    "Refresh.",
    "Review and relearn!",
  ];

  return (
    <div>
      <div className={classes.intro}>
        <Typography variant="h5" gutterBottom>
          Welcome back.
        </Typography>
        <Typography gutterBottom>
          What great thing will you do today?
        </Typography>
      </div>
      <Grid container className={classes.root} alignItems="stretch" spacing={3}>
        {[0, 1, 2].map((value) => (
          <Grid item key={value} lg={4} sm={6} xs={12}>
            <Card className={classes.listCard}>
              <CardActionArea
                component={Link}
                to={links[value]}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3" }}
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

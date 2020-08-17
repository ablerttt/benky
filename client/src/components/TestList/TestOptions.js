import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const createCard = (item, classes) => {
  return (
    <div>
      <Grid key={item} className={classes.listCard}>
        <Card className={classes.listCard}>
          <CardContent>
            <Typography variant="h5">{item.title}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

const TestOptions = (props) => {
  const items = props.set;
  return (
    <Grid container spacing={3}>
      {items.map((item, val) => {
        return (
          <Grid item xs={12} key={val}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <br />
                <Typography variant="body2">
                  Last modified {item.updatedAt}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TestOptions;

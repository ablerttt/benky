import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import api from "../../api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { EditLink } from "../EditList";
import styles from "../../constants/styles";

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    await api.getAllStudySets().then((res) => {
      var items = res.data.data;
      this.setState({
        items,
      });
    });
  };

  createCard = (item, classes) => {
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

  render() {
    const { items } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="lg">
        <div className={classes.root}>
          <Typography variant="h3" className={classes.intro}>
            Your Lists
          </Typography>
          <br />
          <Grid container spacing={3}>
            {items.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Card className={classes.listCard}>
                    <CardContent>
                      <Typography variant="h5">{item.title}</Typography>
                      <br />
                      <Typography variant="body2">
                        Last modified {item.updatedAt}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <EditLink id={item._id} size="medium" color="primary" />
                      <Button size="medium" color="primary">
                        Practice
                      </Button>
                      <Button size="medium" color="primary">
                        Remove
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(ViewList);

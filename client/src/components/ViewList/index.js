import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import api from "../../api";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { compose } from "recompose";
import CardActions from "@material-ui/core/CardActions";
import { EditLink } from "../EditList";
import styles from "../../constants/styles";
import RemoveList from "../RemoveList";
import { PracticeLink } from "../PracticeList";
import { TestsLink } from "../Test";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";

const SampleTerms = (props) => {
  const limited = props.cards.slice(0, 5);
  return limited.map((item, i) => {
    return (
      <Button key={`sample-${i}`} variant="outlined" className={props.t.button}>
        {item.term}
      </Button>
    );
  });
};

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expandedId: [],
      width: props.width,
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

  handleRemoveSet = (keyVal) => {
    console.log(`handle remove set for key ${keyVal}`);
    let current = [...this.state.items];
    current.splice(keyVal, 1);
    this.setState({ items: current });
  };

  handleExpandClickID = (i) => {
    let { expandedId } = this.state;
    if (expandedId.includes(i)) {
      expandedId.splice(expandedId.indexOf(i), 1);
    } else {
      expandedId.push(i);
    }
    this.setState({ expandedId });
    console.log(expandedId);
  };

  getGridListCols = () => {
    const { width } = this.state;
    if (isWidthUp("md", width)) {
      return 2;
    }

    return 1;
  };

  render() {
    const { items, expandedId, width } = this.state;
    const { classes } = this.props;
    const columns = width === "sm" || width === "xs" ? 1 : 2;

    return (
      <Container component="main" maxWidth="lg">
        <div className={classes.root}>
          <Typography variant="h3" className={classes.intro}>
            Your Lists
          </Typography>
          <br />
          {/* <Grid container spacing={3}> */}
          <GridList
            spacing={30}
            cellHeight="auto"
            cols={columns}
          >
            {items.map((item, val) => {
              return (
                <GridListTile key={val} className={classes.root}>
                  <Card className={classes.listCard} raised>
                    <CardHeader
                      title={
                        <Typography variant="h5" gutterBottom>
                          {item.title}
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body1" gutterBottom>
                          Last modified {item.updatedAt}
                        </Typography>
                      }
                      className={classes.cardHeading}
                    />
                    <CardActions>
                      <EditLink id={item._id} className={classes.left} />
                      <PracticeLink id={item._id} />
                      <TestsLink id={item._id} />
                      <RemoveList
                        id={item._id}
                        onRemoveSet={this.handleRemoveSet}
                        onChange={this.handleRemoveSet}
                        keyVal={val}
                      />
                      <IconButton
                        className={classes.expand}
                        onClick={() => this.handleExpandClickID(val)}
                        aria-expanded={expandedId.includes(val)}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </CardActions>
                    <Collapse
                      in={expandedId.includes(val)}
                      timeout="auto"
                      unmountOnExit
                    >
                      <CardContent>
                        <Typography paragraph>Sample Terms:</Typography>
                        <SampleTerms t={classes} cards={item.cards} />
                      </CardContent>
                    </Collapse>
                  </Card>
                </GridListTile>
              );
            })}
          </GridList>
        </div>
      </Container>
    );
  }
}

export default compose(withStyles(styles), withWidth())(ViewList);

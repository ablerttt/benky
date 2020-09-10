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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { convertLastModifiedTime } from "../../constants/times";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SampleTermBase = (props) => {
  const limited = props.cards.slice(0, 5);
  const { classes } = props;
  return limited.map((item, i) => {
    return (
      <Button
        key={`sample-${i}`}
        variant="filled"
        className={classes.buttonSampleTerm}
      >
        {item.term}
      </Button>
    );
  });
};

const SampleTerms = withStyles(styles)(SampleTermBase);

function sortDateOld(items) {
  items.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return 1;
    if (a.updatedAt < b.updatedAt) return -1;
    return 0;
  });
}

function sortDateNew(items) {
  items.sort((a, b) => {
    if (a.updatedAt > b.updatedAt) return -1;
    if (a.updatedAt < b.updatedAt) return 1;
    return 0;
  });
}

function sortTitleAZ(items) {
  items.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
}

function sortTitleZA(items) {
  items.sort((a, b) => {
    if (a.title > b.title) return -1;
    if (a.title < b.title) return 1;
    return 0;
  });
}

class ViewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expandedId: [],
      width: props.width,
      sort: "datenew",
    };
  }

  componentDidMount = async () => {
    await api.getAllStudySets().then((res) => {
      var items = Object.entries(res.data.data);
      for (let i = 0; i < items.length; i++) {
        items[i] = items[i][1];
      }
      sortDateNew(items);
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

  setSortMethod = (m) => {
    var sets = this.state.items;
    if (m === "dateold") {
      sortDateOld(sets);
    } else if (m === "datenew") {
      sortDateNew(sets);
    } else if (m === "nameAZ") {
      sortTitleAZ(sets);
    } else if (m === "nameZA") {
      sortTitleZA(sets);
    } else {
      console.log("Error: invalid sorting method detected.");
    }
    this.setState({ sort: m, items: sets });
  };

  render() {
    const { items, expandedId, width } = this.state;
    const { classes } = this.props;
    const columns = width === "sm" || width === "xs" ? 1 : 2;

    return (
      <Container component="main" maxWidth="lg">
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.intro}
        >
          <Typography
            variant="h5"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            View sets
          </Typography>
          <PopupState
            variant="popover"
            popupId="demo-popup-popover"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {(popupState) => (
              <div>
                <Button
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  className={classes.primaryLightButton}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Sort
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Box style={{ width: "8em" }}>
                    <List component="nav">
                      <ListItem
                        button
                        onClick={() => this.setSortMethod("nameAZ")}
                      >
                        <ListItemText primary="Title: A - Z" />
                      </ListItem>
                      <Divider light />
                      <ListItem
                        button
                        onClick={() => this.setSortMethod("nameZA")}
                      >
                        <ListItemText primary="Title: Z - A" />
                      </ListItem>
                      <ListItem
                        button
                        onClick={() => this.setSortMethod("dateold")}
                      >
                        <ListItemText primary="Date: Oldest" />
                      </ListItem>
                      <Divider light />
                      <ListItem
                        button
                        onClick={() => this.setSortMethod("datenew")}
                      >
                        <ListItemText primary="Date: Newest" />
                      </ListItem>
                    </List>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        </Grid>
        <br />
        <GridList spacing={30} cellHeight="auto" cols={columns}>
          {items.map((item, val) => {
            return (
              <GridListTile key={val} className={classes.root}>
                <Card key={val} className={classes.listCard}>
                  <CardHeader
                    title={
                      <Typography variant="h5" gutterBottom>
                        {item.title}
                      </Typography>
                    }
                    subheader={
                      <Typography variant="body1" gutterBottom>
                        {"Last modified: " +
                          convertLastModifiedTime(
                            new Date(item.updatedAt),
                            new Date(Date.now())
                          )}
                      </Typography>
                    }
                    className={classes.cardHeading}
                  />
                  <CardActions>
                    <EditLink id={item._id} className={classes.left} />
                    <PracticeLink id={item._id} />
                    <TestsLink id={item._id} />
                    <Button
                      className={`${classes.expand} ${classes.primaryLightButton}`}
                      onClick={() => this.handleExpandClickID(val)}
                      aria-expanded={expandedId.includes(val)}
                      aria-label="show more"
                      variant="contained"
                      startIcon={<ExpandMoreIcon />}
                    >
                      Terms
                    </Button>
                    <RemoveList
                      id={item._id}
                      onRemoveSet={this.handleRemoveSet}
                      onChange={this.handleRemoveSet}
                      keyVal={val}
                    />
                  </CardActions>
                  <Collapse
                    in={expandedId.includes(val)}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent>
                      <Typography paragraph>Sample Terms:</Typography>
                      <SampleTerms cards={item.cards} />
                    </CardContent>
                  </Collapse>
                </Card>
              </GridListTile>
            );
          })}
        </GridList>
      </Container>
    );
  }
}

export default compose(withStyles(styles), withWidth())(ViewList);

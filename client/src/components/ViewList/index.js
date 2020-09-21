import React from "react";
import { withStyles } from "@material-ui/core/styles";
import api from "../../api";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { compose } from "recompose";
import styles from "../../constants/styles";
import { convertLastModifiedTime } from "../../constants/times";
import SortOptions from "./SortOptions";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import { EditLink } from "../EditList";
import { PracticeLink } from "../PracticeList";
import { TestsLink } from "../Test";
import { ShowSampleTerms, SampleTerms } from "./SampleTerms";
import RemoveList from "../RemoveList";
import NoSets from "../../pages/NoSets";
import { withAuthorization } from "../../auth/Session";

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

class ViewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      expandedId: [],
      width: props.width,
      sort: "datenew",
      empty: false,
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

      if (items.length === 0) {
        this.setState({ empty: true });
      }
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
    let current = [...this.state.items];
    let currentExpanded = [...this.state.expandedId];
    current.splice(keyVal, 1);
    currentExpanded.splice(keyVal, 1);
    this.setState({ items: current });
    this.setState({ expandedId: currentExpanded });
  };

  handleExpandClickID = (i) => {
    let { expandedId } = this.state;
    if (expandedId.includes(i)) {
      expandedId.splice(expandedId.indexOf(i), 1);
    } else {
      expandedId.push(i);
    }
    this.setState({ expandedId });
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
    const { items, expandedId, empty } = this.state;
    const { classes } = this.props;

    return (
      <Container component="main" maxWidth="lg">
        <Grid
          container
          justify="space-between"
          alignItems="center"
          className={classes.intro}
        >
          <Typography
            variant="h4"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
            }}
          >
            View sets
          </Typography>
          {!empty && <SortOptions setSortMethod={this.setSortMethod} />}
        </Grid>
        {!empty &&
          items.map((item, val) => {
            return (
              <Card key={val} className={classes.listCard} raised>
                <CardHeader
                  title={
                    <Typography variant="h6" gutterBottom>
                      {item.title}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body1" gutterBottom>
                      {"Last modified " +
                        convertLastModifiedTime(
                          new Date(item.updatedAt),
                          new Date(Date.now())
                        ) +
                        " ago"}
                    </Typography>
                  }
                />
                <CardActions>
                  <div className={classes.viewCardOptions}>
                    <EditLink id={item._id} />
                    <PracticeLink id={item._id} length={item.cards.length} />
                    <TestsLink id={item._id} length={item.cards.length} />
                    <ShowSampleTerms
                      handleExpandClickID={this.handleExpandClickID}
                      length={item.cards.length}
                      val={val}
                      expandedId={expandedId}
                    />
                    <RemoveList
                      id={item._id}
                      onRemoveSet={this.handleRemoveSet}
                      onChange={this.handleRemoveSet}
                      keyVal={val}
                    />
                  </div>
                </CardActions>
                <Collapse
                  in={expandedId.includes(val)}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <SampleTerms cards={item.cards} />
                  </CardContent>
                </Collapse>
              </Card>
            );
          })}
        {empty && <NoSets />}
      </Container>
    );
  }
}

const condition = (authUser) => !!authUser;

export default compose(
  withStyles(styles),
  withAuthorization(condition)
)(ViewList);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
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
import { withFirebase } from "../../auth/Firebase";
import { withAuthorization } from "../../auth/Session";
import * as SORT from "../../constants/sortItems";

class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      expandedId: props.expandedId,
      sort: "datenew",
      empty: props.empty,
    };
  }

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
      SORT.sortDateOld(sets);
    } else if (m === "datenew") {
      SORT.sortDateNew(sets);
    } else if (m === "nameAZ") {
      SORT.sortTitleAZ(sets);
    } else if (m === "nameZA") {
      SORT.sortTitleZA(sets);
    } else {
      console.log("Error: invalid sorting method detected.");
    }
    this.setState({ sort: m, items: sets });
  };

  render() {
    const { items, expandedId, empty } = this.state;
    const { classes } = this.props;

    return (
      <Container
        component="main"
        maxWidth="lg"
        style={{ margin: "0", padding: "0" }}
      >
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
  withAuthorization(condition),
  withFirebase
)(ViewContainer);

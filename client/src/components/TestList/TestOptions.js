import React from "react";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../constants/styles";
import { Link } from "react-router-dom";
import SortOptions from "./SortOptions";
import { convertLastModifiedTime } from "../../constants/times";

function sortDateOld(items) {
  items.sort((a, b) => {
    if (a.dateTaken > b.dateTaken) return 1;
    if (a.dateTaken < b.dateTaken) return -1;
    return 0;
  });
}

function sortDateNew(items) {
  items.sort((a, b) => {
    if (a.dateTaken > b.dateTaken) return -1;
    if (a.dateTaken < b.dateTaken) return 1;
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

class TestOptions extends React.Component {
  constructor(props) {
    super(props);
    let items = props.testResults;
    sortDateNew(items);
    this.state = {
      set: items,
      sort: "datenew",
    };
  }

  setSortMethod = (m) => {
    var set = this.state.set;
    if (m === "dateold") {
      sortDateOld(set);
    } else if (m === "datenew") {
      sortDateNew(set);
    } else if (m === "nameAZ") {
      sortTitleAZ(set);
    } else if (m === "nameZA") {
      sortTitleZA(set);
    } else {
      console.log("Error: invalid sorting method detected.");
    }
    this.setState({ sort: m, set: set });
  };

  render() {
    const { classes } = this.props;
    const { set } = this.state;

    return (
      <div>
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
            Test Archive
          </Typography>
          <SortOptions setSortMethod={this.setSortMethod} />
        </Grid>
        <GridList spacing={30} cellHeight="auto" cols={1}>
          {set.map((item, val) => {
            return (
              <GridListTile key={val} className={classes.root}>
                <Card key={val} className={classes.listCard}>
                  <CardActionArea
                    component={Link}
                    to={`/testresult/${item._id}`}
                  >
                    <CardHeader
                      title={item.title}
                      subheader={`Taken ${convertLastModifiedTime(
                        new Date(item.dateTaken),
                        new Date(Date.now())
                      )} ago`}
                      className={classes.cardHeading}
                    />
                  </CardActionArea>
                </Card>
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(TestOptions);

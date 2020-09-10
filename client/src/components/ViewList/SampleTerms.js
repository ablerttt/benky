import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Toolbar";

const ShowSampleTermBase = (props) => {
  const { classes } = props;
  if (props.length === 0) {
    return (
      <Tooltip title="There are no terms in this set." style={{ padding: "0" }}>
        <Button
          disabled
          className={classes.primaryLightButton}
          variant="contained"
        >
          Terms
        </Button>
      </Tooltip>
    );
  } else {
    return (
      <div>
        <Button
          className={`${classes.expand} ${classes.primaryLightLimitedButton}`}
          onClick={() => props.handleExpandClickID(props.val)}
          aria-expanded={props.expandedId.includes(props.val)}
          aria-label="show more"
          variant="contained"
        >
          Terms
        </Button>
      </div>
    );
  }
};

const ShowSampleTerms = withStyles(styles)(ShowSampleTermBase);

const SampleTermBase = (props) => {
  const limited = props.cards.slice(0, 5);
  const { classes } = props;
  return limited.map((item, i) => {
    return (
      <Button
        key={`sample-${i}`}
        variant="contained"
        className={classes.buttonSampleTerm}
      >
        {item.term}
      </Button>
    );
  });
};

const SampleTerms = withStyles(styles)(SampleTermBase);

export { ShowSampleTerms, SampleTerms };

import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Toolbar";
import Zoom from "@material-ui/core/Zoom";

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
          className={`${classes.expand} ${classes.primaryLightButton}`}
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
export { ShowSampleTerms };

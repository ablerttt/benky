import React from "react";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const SortOptions = (props) => {
  const { classes } = props;
  return (
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
                <ListItem button onClick={() => props.setSortMethod("nameAZ")}>
                  <ListItemText primary="Title: A - Z" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={() => props.setSortMethod("nameZA")}>
                  <ListItemText primary="Title: Z - A" />
                </ListItem>
                <ListItem button onClick={() => props.setSortMethod("dateold")}>
                  <ListItemText primary="Date: Oldest" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={() => props.setSortMethod("datenew")}>
                  <ListItemText primary="Date: Newest" />
                </ListItem>
              </List>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default withStyles(styles)(SortOptions);

import React from "react";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Fade from "@material-ui/core/Fade";
// import Switch from "@material-ui/core/Switch";

const Terms = (props) => {
  const { cards } = props;
  // cards.map((item) => {
  //   console.log(item);
  // });
  // return <div>Hello this is the Terms</div>;

  return cards.map((item, id) => <div>{item.term}</div>);
};

const PracticeContainer = (props) => {
  const { classes, title, cards } = props;
  return (
    <div>
      <Typography className={classes.intro} variant="h3">
        Practice Container: {title}
      </Typography>
      <Terms cards={cards} />
    </div>
  );
};

export default withStyles(styles)(PracticeContainer);

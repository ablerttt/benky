import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    borderRadius: "5em",
    textTransform: "none",
  },
  input: {
    display: "none",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

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

const TestOptions = (props) => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClickID = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const items = props.set;
  return (
    <Grid container spacing={3}>
      {items.map((item, i) => {
        return (
          <Grid item xs={12} sm={6} key={item._id}>
            <Card>
              <CardActionArea component={Link} to={`/test/${item._id}`}>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <br />
                  <Typography variant="body1" gutterBottom>
                    Last edited {item.updatedAt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon fontSize="small" />
                </IconButton>
                <IconButton
                  className={classes.expand}
                  onClick={() => handleExpandClickID(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
                >
                  <ExpandMoreIcon fontSize="small" />
                </IconButton>
              </CardActions>
              <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Sample Terms:</Typography>
                  <SampleTerms t={classes} cards={item.cards} />
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default TestOptions;

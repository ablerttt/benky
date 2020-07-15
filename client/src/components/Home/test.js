import React from "react";
// import "./home.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withAuthorization } from "../Session";
import { SignUpLink } from "../SignUp";
// import { NewSetMessage } from "../NewSet";
import { useStyles } from "./index";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Option(props) {
  let classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              test
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Option;

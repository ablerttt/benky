import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Option = (props) => {
  return (
    <div>
      <Card>
        <CardActionArea component={Link} to={props.connect}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography color="textSecondary">{props.inspo}</Typography>
            <br />
            <br />
            <Typography variant="body2" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Option;

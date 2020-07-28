import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import style from "./styles";

const Option = (props) => {
  return (
    <div>
      <Card href={props.connect}>
        <Link href={props.connect} style={{ textDecoration: "none" }}>
          <CardActionArea>
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
        </Link>
      </Card>
    </div>
  );
};

export default Option;

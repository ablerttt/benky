import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./index";
import Link from "@material-ui/core/Link";

function Option(props) {
  let classes = useStyles();
  return (
    <div>
      <Card className={classes.card} href={props.connect}>
        <Link href={props.connect} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {props.inspo}
              </Typography>
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
}

export default Option;

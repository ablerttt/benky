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
import Link from "@material-ui/core/Link";
import * as ROUTES from "../../constants/routes";

function Option(props) {
  let classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <Link href={props.connect} style={{ textDecoration: "none" }}>
          <CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Do something amazing.
              </Typography>
              <br />
              <br />
              <Typography variant="body2" component="p">
                Put your knowledge to the test.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </div>
  );
}

export default Option;

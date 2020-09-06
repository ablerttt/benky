import React from "react";
import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../constants/routes";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        {/* insert cute image here */}
        <Typography variant="h2">404</Typography>
        <Typography variant="h5">
          We couldn't find what you were looking for.
        </Typography>
        <Button>
          <Link href={ROUTES.HOME}>Return Home</Link>
        </Button>
      </div>
    );
  }
}

export default NotFoundPage;

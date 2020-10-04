import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
const Landing = (props) => {
  // const { classes } = props;
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <Box height="80vh">
        <Paper
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            margin: "auto",
            verticalAlign: "middle",
            backgroundColor: "rgba(0,0,0,0.0)",
          }}
        >
          <div
            style={{
              margin: "auto",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h2">
              <strong>benky.</strong>
            </Typography>
            <br />
            <Typography variant="h6">Studying made effective.</Typography>
          </div>
          <div style={{ margin: "auto" }}>
            <img
              src="/practice.png"
              width="400px"
              height="300px"
              alt="practice sample"
            />
          </div>
        </Paper>
      </Box>
      <Box height="100vh">
        <Paper
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            height: "100%",
            margin: "auto",
            verticalAlign: "middle",
            backgroundColor: "rgba(0,0,0,0.0)",
          }}
        >
          <div
            style={{
              margin: "auto",
              flexDirection: "row",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">
              <strong>Questions?</strong>
            </Typography>
            <br />
            <Typography variant="h5">
              <Link
                href="mailto:alberthan2011@gmail.com"
                onClick={preventDefault}
              >
                Email our team.
              </Link>
            </Typography>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default withStyles(styles)(Landing);

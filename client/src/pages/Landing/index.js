import React from "react";
import Typography from "@material-ui/core/Typography";
import styles from "../../constants/styles";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
const Landing = (props) => {
  const iconPath = process.env.PUBLIC_URL + "/assets/";
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <Box height="90vh">
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
              src={`${iconPath}create.jpg`}
              alt="practice sample"
              height="180px"
            />
          </div>
        </Paper>
      </Box>
      <Box height="100vh" width="100%">
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
              justifyContent: "center",
            }}
          >
            <Typography variant="h4">
              <strong>How it works.</strong>
            </Typography>
            <br />
            <Typography>
              1. Input a set using your newfound knowledge.
            </Typography>
            <Typography>
              2. Practice using the interactive flashcard UI to gague
              understanding
            </Typography>
            <Typography>
              3. Test yourself and check for improvement!!!
            </Typography>
            <br />
            <div style={{ display: "inline-block" }}>
              <img
                src={`${iconPath}create.jpg`}
                alt="practice sample"
                style={{
                  borderRadius: "1em",
                  borderBlockColor: "white",
                  borderBlockWidth: "5px",
                }}
                height="180px"
              />
              <img
                src={`${iconPath}practice.jpg`}
                alt="practice sample"
                height="180px"
                // width="30%"
              />
              <img
                src={`${iconPath}testresult.jpg`}
                alt="practice sample"
                height="180px"
                // width="30%"
              />
            </div>
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
                style={{ textDecoration: "none" }}
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

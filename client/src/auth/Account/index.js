import React from "react";
import { compose } from "recompose";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { withAuthorization, AuthUserContext } from "../Session";
import styles from "../../constants/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import EmailChange from "../EmailChange";
import DeleteAccount from "../DeleteAccount";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    fontSize: "16px",
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const AccountPage = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { classes } = props;
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <Typography variant="h3" className={classes.intro}>
            Account
          </Typography>
          <div className={classes.accountRoot}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
              orientation="vertical"
              className={classes.tabs}
              centered
            >
              <AntTab label="Change Email" />
              <AntTab label="Change Password" />
              <AntTab label="Forgot Password" />
              <AntTab label="Delete Account" />
            </Tabs>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
              <EmailChange />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1}>
              <PasswordChangeForm />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2}>
              <PasswordForgetForm />
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={3}>
              <DeleteAccount />
            </TabPanel>
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const condition = (authUser) => !!authUser;

export default compose(
  withAuthorization(condition),
  withStyles(styles)
)(AccountPage);

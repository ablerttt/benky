//client/src/constants/styles.js

const styles = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
      height: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      display: "none",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: "0.4em",
      borderColor: "transparent",
    },
  },
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  intro: {
    margin: "30px 0",
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
  },
  warningButton: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  buttonSampleTerm: {
    margin: theme.spacing(1),
    borderRadius: "2em",
    textTransform: "none",
    backgroundColor: "white",
  },
  listCard: {
    borderRadius: "1em",
    background: "linear-gradient(45deg, #628bd1 30%, #50b39d 90%)",
    padding: "1em",
    marginBottom: "2em",
    flexGrow: 1,
  },
  listTestCard: {
    borderRadius: "1em",
    background: "linear-gradient(45deg, #628bd1 30%, #50b39d 90%)",
    padding: "1em",
    marginBottom: "1.5em",
    flexGrow: 1,
  },
  viewCardOptions: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    overflow: "auto",
  },
  titleTextField: {
    width: "85%",
    marginBottom: "4%",
  },
  titleResize: {
    fontSize: 24,
  },
  termTextField: {
    width: "35%",
    marginRight: "3%",
    marginBottom: "2%",
  },
  defTextField: {
    width: "35%",
    marginRight: "3%",
    marginBottom: "2%",
  },
  secondaryButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
  },
  primaryLightButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryDarkButton: {
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.darkHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryLightLimitedButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    width: "6em",
  },
  primaryDarkLimitedButton: {
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.darkHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    width: "6em",
  },
  expand: {
    transform: "rotate(0deg)",
    // marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  left: {
    marginLeft: "auto",
  },
  cancelButton: {
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "black",
  },

  tabs: {
    textTransform: "none",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  accountRoot: {
    textTransform: "none",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabPanel: {
    width: "70%",
  },
  practiceLeftFab: {
    position: "absolute",
    left: theme.spacing(5),
    bottom: "40%",
    transform: "rotate(-90deg)",
  },
  practiceRightFab: {
    position: "absolute",
    padding: "auto 0",
    right: theme.spacing(5),
    bottom: "40%",
    transform: "rotate(90deg)",
  },
  cardBox: {
    padding: "100px 0",
  },
  practiceCard: {
    position: "relative",
    backgroundColor: "#e3fbfc",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: "3em",
  },
  practiceCardTitle: {
    width: "100%",
    textAlign: "center",
  },
  practiceCardControl: {
    display: "flex",
    flexDirection: "column",
  },
  practiceCardSwitch: {
    margin: "auto",
  },
  practiceCardDescription: {
    width: "60%",
    margin: "auto",
    padding: "auto",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "2em",
    textAlign: "center",
  },
  logInText: {
    width: "40%",
    margin: theme.spacing(1),
  },
  clearStyle: {
    margin: "0",
    border: "0",
    padding: "0",
  },
  testCard: {
    padding: "1.5em",
    border: "0",
    margin: "2em 0",
    borderRadius: "1em",
    backgroundColor: "#d9d7d7",
  },
  submitButton: {
    display: "flex",
    margin: "auto",
    marginBottom: "30px",
    borderRadius: "1em",
    textTransform: "none",
    color: "white",
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
  },
  colortest: {
    margin: theme.spacing(1),
    borderRadius: "1em",
    textTransform: "none",
  },
  correctButton: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  unselectedButton: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      // backgroundColor: "white",
    },
    backgroundColor: theme.palette.secondary.light,
    // backgroundColor: "white",
  },
  incorrectButton: {
    "&:hover": {
      backgroundColor: theme.palette.error.light,
    },
    backgroundColor: theme.palette.error.light,
  },
});

export default styles;

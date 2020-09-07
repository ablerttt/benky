//client/src/constants/styles.js

const styles = (theme) => ({
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
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
  },
  listCard: {
    borderRadius: "0.5em",
    backgroundColor: "#e3fbfc",
    flexGrow: 1,
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
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
  },
  primaryLightButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryDarkButton: {
    backgroundColor: theme.palette.primary.dark,
    // margin: theme.spacing(0.5),
    margin: "auto",
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
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
  warningButton: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  cancelButton: {
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
    color: "black",
  },
  cardHeading: {
    title: {
      variant: "h1",
      backgroundColor: "pink",
    },
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
    backgroundColor: "#e3fbfc",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    height: "100%",
    borderRadius: "3em",
  },
  practiceCardTitle: {
    width: "100%",
    textAlign: "center",
  },
  practiceCardContent: {
    display: "flex",
    margin: "auto",
  },
  practiceCardDescription: {
    width: "50%",
    margin: "auto",
    padding: "1rem",
    justifyContent: "center",
    borderRadius: "2em",
    textAlign: "center",
  },
  logInText: {
    width: "40%",
    margin: theme.spacing(1),
  },
});

export default styles;

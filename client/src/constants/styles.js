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
    margin: theme.spacing(0.5),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryDarkButton: {
    backgroundColor: theme.palette.primary.dark,
    margin: theme.spacing(0.5),
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
});

export default styles;

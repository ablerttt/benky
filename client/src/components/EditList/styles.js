const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  input: {
    color: theme.palette.text.secondary,
  },
  intro: {
    margin: "1em 0",
  },
  titleTextField: {
    width: "100%",
    color: theme.palette.text.secondary,
  },
  termTextField: {
    width: "40%",
    marginRight: "5%",
  },
  defTextField: {
    width: "40%",
  },
  deleteCardButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    float: "right",
  },
  termCard: {
    borderRadius: "1em",
    backgroundColor: "white",
    padding: "1em 2em",
    marginBottom: "2em",
  },
  titleCard: {
    borderRadius: "1em",
    backgroundColor: theme.palette.primary.cardLight,
    padding: "1em 2em",
    marginBottom: "2em",
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
  dialog: {
    backgroundColor: theme.palette.primary.dark,
  },
});

export default styles;

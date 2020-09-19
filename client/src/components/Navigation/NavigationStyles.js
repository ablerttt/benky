const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white",
  },
  right: {
    color: "white",
    textTransform: "none",
    marginLeft: theme.spacing(2),
    borderRadius: "3em",
  },
  appbar: {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
  },
  primaryLightButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(0.5),
    // borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  highlightButton: {
    backgroundColor: theme.palette.highlight.main,
    "&:hover": {
      background: theme.palette.highlight.light,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
});

export default styles;

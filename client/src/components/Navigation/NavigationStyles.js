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
    margin: theme.spacing(2),
    borderRadius: "3em",
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
  },
  appbar: {
    backgroundColor: "#2E3B55",
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
});

export default styles;

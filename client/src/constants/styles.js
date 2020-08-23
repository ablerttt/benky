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
  warning: {
    backgroundColor: "#d095db",
    color: "white",
  },
  listCard: {
    borderRadius: "0.5em",
  },
});

export default styles;

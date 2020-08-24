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
    marginBottom: "4%",
  },
  defTextField: {
    width: "35%",
    marginRight: "3%",
  },
  secondaryButton: {
    // width: "3%",
    backgroundColor: "#436cab",
    color: "white",
  },
});

export default styles;

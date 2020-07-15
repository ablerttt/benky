import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  right: {
    underline: "none",
    color: "white",
    textDecoration: "none",
    margin: "0 2vw",
  },
}));

export default useStyles;

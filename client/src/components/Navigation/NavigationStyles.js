import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  //   menuButton: {
  //     // background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //     border: 0,
  //     color: "white",
  //     height: 48,
  //     padding: "0px 20px",
  //     borderRadius: "30px",
  //     margin: "0px 10px",
  //     width: "120px",
  //     "&:hover": {
  //       background: "#0286AD",
  //     },
  //   },
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

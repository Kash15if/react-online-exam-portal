import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  timer: {
    width: "80%",
    padding: "18px 8px",
    margin: "auto",
    backgroundColor: "blue",
    borderRadius: "4px",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
}));
const Timer = () => {
  const classes = useStyles();
  return <h1 className={classes.timer}>01 : 56: 22</h1>;
};

export default Timer;

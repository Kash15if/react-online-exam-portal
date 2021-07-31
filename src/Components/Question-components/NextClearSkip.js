import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  NextClearSkip: {
    position: "relative",
  },
  skipBtn: {
    position: "absolute",
    right: 0,
  },
  btn: {
    margin: "0px 15px",
  },
}));

const NextClearSkip = () => {
  const classes = useStyles();

  return (
    <div className={classes.NextClearSkip}>
      <Button variant="contained" color="primary" className={classes.btn}>
        Clear Response
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="#contained-buttons"
        className={classes.btn}
      >
        Submit and Next
      </Button>
      <Button
        variant="contained"
        color="primary"
        href="#contained-buttons"
        className={`${classes.skipBtn} ${classes.btn}`}
      >
        Skip
      </Button>
    </div>
  );
};

export default NextClearSkip;

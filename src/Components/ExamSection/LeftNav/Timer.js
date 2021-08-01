import { makeStyles } from "@material-ui/core";
import Timer from "react-compound-timer";
import React from "react";

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
const TimerComp = () => {
  const classes = useStyles();
  return (
    <Timer
      initialTime={60 * 2 * 55000}
      direction="backward"
      checkpoints={[
        {
          time: 60 * 2 * 55000 - 5000,
          callback: () => console.log("Checkpoint A"),
        },
        {
          time: 60 * 2 * 55000 - 8000,
          callback: () => console.log("Checkpoint B"),
        },
      ]}
    >
      {() => (
        <React.Fragment>
          <h1 className={classes.timer}>
            <Timer.Hours /> : <Timer.Minutes /> : <Timer.Seconds />
          </h1>
          ;
        </React.Fragment>
      )}
    </Timer>
  );
};

export default TimerComp;

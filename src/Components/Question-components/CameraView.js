import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  CameraView: {
    width: "80%",
    height: "20vh",
    margin: "auto",
    backgroundColor: "blue",
    borderRadius: "4px",
  },
}));

const CameraView = () => {
  const classes = useStyles();

  return (
    <Box color="text.primary" className={classes.CameraView}>
      Camera View
    </Box>
  );
};

export default CameraView;

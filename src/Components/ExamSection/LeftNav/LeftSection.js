import Timer from "./Timer";
import CameraView from "./CameraView";
import Instructions from "./Instructions";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    padding: "10px",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  timerTop: {
    width: "100%",
    marginTop: "5vh",
    marginBottom: "5vh",
  },
  camera: {
    position: "absolute",
    bottom: "20px",
    width: "100%",
  },
}));

const LeftSection = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Divider />
      <List className={classes.timerTop}>
        <Timer></Timer>
      </List>
      <Divider />

      <List>
        <Instructions></Instructions>
      </List>
      <Divider />

      <List className={classes.camera}>
        <CameraView />
      </List>
    </Drawer>
  );
};

export default LeftSection;

import Timer from "./Timer";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import CameraView from "./CameraView";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  timerTop: {
    marginTop: "5vh",
    marginBottom: "5vh",
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

      <List>Instructions</List>
      <Divider />

      <List>
        <CameraView />
      </List>
    </Drawer>
  );
};

export default LeftSection;

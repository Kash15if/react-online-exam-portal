import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Exam = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <CssBaseline />
        <LeftSection />
      </div>

      <div>
        <RightSection />
      </div>
    </div>
  );
};

export default Exam;

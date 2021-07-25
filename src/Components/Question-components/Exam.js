import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import SubmitExamBtn from "./SubmitExamBtn";

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
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <LeftSection />
        <SubmitExamBtn />
      </div>

      <RightSection />
    </div>
  );
};

export default Exam;

import QNoList from "./QNoList";
import SubmitExamBtn from "./SubmitExamBtn";
import Question from "./Question";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  QuizTop: {
    position: "relative",
  },
  submitExamBtn: {
    position: "absolute",
    top: "0",
    right: "0",
  },
}));

const RightSection = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.QuizTop}>
        <QNoList />
        <SubmitExamBtn className={classes.submitExamBtn} />
      </div>

      <Question></Question>
    </div>
  );
};

export default RightSection;

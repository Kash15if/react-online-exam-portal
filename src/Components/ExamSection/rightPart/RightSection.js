import QNoList from "./QNoList";
import SubmitExamBtn from "./SubmitExamBtn";
import Question from "./Question";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  QuizTop: {
    position: "relative",
    padding: "3vh",
  },
  submitExamBtn: {
    position: "absolute",
    top: "3vh",
    right: "3vh",
  },
}));

const RightSection = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.QuizTop}>
        <QNoList />
        <div className={classes.submitExamBtn}>
          <SubmitExamBtn />
        </div>
      </div>

      <Question></Question>
    </div>
  );
};

export default RightSection;

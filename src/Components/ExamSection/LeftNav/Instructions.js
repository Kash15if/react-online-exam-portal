import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  InstructionBox: {
    margin: "10px",
  },
  InsTitle: {
    textAlign: "center",
  },
  olStyle: {
    marginBottom: "10px",
  },
});
const Instructions = () => {
  const classes = useStyle();
  return (
    <Box className={classes.InstructionBox}>
      <h1 className={classes.InsTitle}>Instructions</h1>
      <ol>
        <li className={classes.olStyle}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit
        </li>
        <li className={classes.olStyle}>
          Dolor molestiae ullam impedit explicabo, nam placeat quisquam
          similique aut reprehenderit!
        </li>
        <li className={classes.olStyle}>
          Dolor natus velit a nam sunt? Dolor sit vitae repudiandae quia.
        </li>
      </ol>
    </Box>
  );
};

export default Instructions;

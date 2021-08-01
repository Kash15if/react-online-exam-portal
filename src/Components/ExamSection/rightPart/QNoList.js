import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

const QNoList = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.pagiNation}>
      <Pagination
        count={20}
        variant="outlined"
        shape="rounded"
        color="primary"
      />
    </Grid>
  );
};

export default QNoList;

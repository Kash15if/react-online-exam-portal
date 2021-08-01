import NextClearSkip from "./NextClearSkip";

import { Typography } from "@material-ui/core";
import { Radio, RadioGroup } from "@material-ui/core";
import { FormControlLabel, FormControl, FormLabel } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "15px",
    padding: "20px",
  },
  queAndOpt: {
    margin: "15px",
  },
}));
const Question = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.queAndOpt}>
            <Typography>
              A can lay railway track between two given stations in 16 days and
              B can do the same job in 12 days. With help of C, they did the job
              in 4 days only. Then, C alone can do the job in:
            </Typography>
            <Typography>
              A can lay railway track between two given stations in 16 days and
              B can do the same job in 12 days. With help of C, they did the job
              in 4 days only. Then, C alone can do the job in:
            </Typography>
            <Typography>
              A can lay railway track between two given stations in 16 days and
              B can do the same job in 12 days. With help of C, they did the job
              in 4 days only. Then, C alone can do the job in:
            </Typography>

            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value="value">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <NextClearSkip />
        </CardContent>
      </Card>
    </div>
  );
};

export default Question;

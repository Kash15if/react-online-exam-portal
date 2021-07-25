import Button from "@material-ui/core/Button";

const NextClearSkip = () => {
  return (
    <div>
      <Button variant="contained" disabled>
        Clear Response
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Submit and Next
      </Button>
      <Button variant="contained" color="secondary" href="#contained-buttons">
        Skip
      </Button>
    </div>
  );
};

export default NextClearSkip;

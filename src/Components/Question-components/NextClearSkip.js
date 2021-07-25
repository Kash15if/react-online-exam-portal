import Button from "@material-ui/core/Button";

const NextClearSkip = () => {
  return (
    <div>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  );
};

export default NextClearSkip;

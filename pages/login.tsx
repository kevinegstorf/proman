import {
  Grid,
  Paper,
  Typography,
  Input,
  Button,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles({
  paper: {
    marginTop: "5em",
    padding: "4em",
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    background:
      "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(56,255,216,1) 0%, rgba(0,146,255,1) 100%)",
  },
  button: { color: "#fff", marginTop: 8 },
});

const Login = () => {
  const classes = styles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Paper elevation={6} className={classes.paper}>
          <Typography variant="h5">Login</Typography>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;

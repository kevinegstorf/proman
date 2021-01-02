import React from "react";
import { signIn, signOut, useSession } from "next-auth/client";
import { Grid, Paper, Typography, Button, makeStyles } from "@material-ui/core";
import Layout from "layout";

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

export default function Page() {
  const [session] = useSession();
  const classes = styles();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Paper elevation={6} className={classes.paper}>
          {!session && (
            <>
              <Typography>Not signed in</Typography>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleSignIn}
              >
                Sign in
              </Button>
            </>
          )}
          {session && (
            <>
              <Layout user={session.user}>
                Signed in as {session.user.name} <br />
                {session.user.image && <img src={session.user.image} alt="" />}
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  onClick={handleSignOut}
                >
                  Sign out
                </Button>
              </Layout>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

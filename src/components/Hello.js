import React, { useEffect, useState } from 'react';
// import { findDOMNode } from 'react-dom'
// import { hot } from 'react-hot-loader'

import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

import { getFromLocalStorage, setToLocalStorage } from '../service';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '"Courier New", Courier, monospace',
    padding: "1em",
    // minWidth: 750,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto", 
    maxWidth: 800,
  },
  text: {
    // flexGrow: 1,
    fontFamily: '"Courier New", Courier, monospace',
    fontWeight: "600",
    fontStyle: "italic",
  },
}));

const isNameSet = (uname) => {
  if (uname) return true;
  else return false;
}

export default function Hello() {
    const classes = useStyles();

    const [username, setUsername] = useState(getFromLocalStorage("username") || "");
    const [isNameEntered, setIsNameEntered] = useState(isNameSet(username));

    useEffect(() => {
      setUsername(getFromLocalStorage("username"));
    }, [])

    return (
      <div className={classes.root} >
        <Paper className={classes.paper} elevation="3">

        <Grid container direction="column" alignItems="flex-start" justify="center" spacing={2} >
          {isNameEntered ? 
            <Grid item container justify="flex-start" spacing={0}>
              <Grid item xs>
                <Typography className={classes.text} variant="h5" >
                  Hello, {username}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Button size="small" variant="contained" onClick={() => {setToLocalStorage("username", ""); setIsNameEntered(false)}}>Reset</Button>
              </Grid>
            </Grid>
          :
            <Grid item container justify="flex-start" spacing={2} >
              <Grid item>
                <Typography className={classes.text} variant="h5" >
                  What is your name?
                </Typography>
              </Grid>
              <Grid item>
                <TextField type='text' value={username} onChange={(v) => {setUsername(v.target.value);}} />
              </Grid>
              <Grid item>
                <Button size="small" variant="contained" onClick={() => {setToLocalStorage("username", username); setUsername(getFromLocalStorage("username")); setIsNameEntered(true)}}>Enter</Button>
              </Grid>
            </Grid>
          }
        </Grid>
      </Paper>
      </div>
    )
  }


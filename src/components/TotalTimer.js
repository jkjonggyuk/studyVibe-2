import React, { useEffect, useState } from 'react';
import { Button, Grid, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

import { getFromLocalStorage, setToLocalStorage } from '../service';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '"Courier New", Courier, monospace',
    padding: "1em",
    minWidth: 750,
    // minHeight: 75,
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
  time: {
    // flexGrow: 1,
    fontFamily: '"Courier New", Courier, monospace',
    // fontWeight: "600",
    fontStyle: "italic",
  },
}));

export default function TotalTimer() {
    const classes = useStyles();

    const [endTime, setEndTime] = useState(getFromLocalStorage("endtime") || "17:30");
    const [isTimeEntered, setIsTimeEntered] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, [])

    const getTimeLeft = () => {
        const et = new Date('1970-01-01T' + endTime);
        let hours = et.getHours() - currentTime.getHours()
        let minutes = et.getMinutes() - currentTime.getMinutes()
        let seconds = et.getSeconds() - currentTime.getSeconds()
        if (seconds < 0) {
          minutes--;
          seconds += 60;
        }
        if (minutes < 0) {
          hours--;
          minutes += 60;
        }
        if (hours < 0) {
          hours += 24;
        }
        return <div>-{hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</div>
    }

    return (
      <div className={classes.root} >
        <Paper className={classes.paper} elevation="3">

        <Grid container direction="column" alignItems="flex-start" justify="center" spacing={2} >
          {isTimeEntered ? 
            <Grid item container justify="space-between" alignItems="center" spacing={0} xs>
              <Grid item container justify="space-between" spacing={0} xs>
                <Grid item>
                  <Typography className={classes.text} variant="h5">
                    Until {endTime},
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography className={classes.time} variant="h4">
                    {getTimeLeft()}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={2}>
                <Button size="small" variant="contained" onClick={() => {setIsTimeEntered(false)}}>Reset</Button>
              </Grid>
            </Grid>
          :
            <Grid item container justify="flex-start" spacing={2} >
              <Grid item>
                <Typography className={classes.text} variant="h5" gutterBottom>
                  Today, until what time?
                </Typography>
              </Grid>
              <Grid item>
                <TextField type='time' fullWidth value={endTime} onChange={(v) => {setEndTime(v.target.value);}} /> 
              </Grid>
              <Grid item>
                <Button size="small" variant="contained" onClick={() => {console.log(endTime); setToLocalStorage("endtime", endTime); setEndTime(getFromLocalStorage("endtime")); setIsTimeEntered(true)}}>Enter</Button>
              </Grid>
            </Grid>
          }
        </Grid>
      </Paper>
      </div>
    )
  }


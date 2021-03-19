import React, { useEffect, useState } from 'react';
// import { findDOMNode } from 'react-dom'
// import { hot } from 'react-hot-loader'
import Slider from '@material-ui/core/Slider';

import { Box, Button, Grid, IconButton, Input, makeStyles, Paper, TextField, Typography } from '@material-ui/core';

import { getFromLocalStorage, setToLocalStorage } from '../service';

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '"Courier New", Courier, monospace',
    padding: "1em",
    minWidth: 750,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto", 
  },
  text: {
    fontFamily: '"Courier New", Courier, monospace',
  },
}));

export default function Pomodoro() {
    const classes = useStyles();

    const [studyMinute, setStudyMinute] = useState(50);
    const [currentStudyMinute, setcurrentStudyMinute] = useState(studyMinute * 60);
    const [restMinute, setRestMinute] = useState(5);
    const [currentRestMinute, setcurrentRestMinute] = useState(restMinute * 60);
    const [studying, setStudying] = useState(false);
    const [resting, setResting] = useState(false);


    useEffect(() => {
      const interval = setInterval(() => {
        if (studying) {
          if (currentStudyMinute <= 0) {
            alert("Time's up! Time to rest now.");
            setStudying(false);
            setcurrentStudyMinute(studyMinute * 60);
            setResting(true);
          } else {
            setcurrentStudyMinute(currentStudyMinute - 1);
          }
        }
        if (resting) {
          if (currentRestMinute <= 0) {
            alert("Time's up! Back to study now.");
            setResting(false);
            setcurrentRestMinute(restMinute * 60);
            setStudying(true);
          } else {
            setcurrentRestMinute(currentRestMinute - 1);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [currentStudyMinute, currentRestMinute, studyMinute, restMinute, studying, resting])

    return (
      <div className={classes.root} >
        <Paper className={classes.paper} elevation="3">

        <Grid container direction="row" alignItems="center" justify="center" spacing={2} xs >
          <Grid item container direction="column" alignItems="center" justify="flex-start" spacing={1} xs={6} >
            <Grid item>
              <Typography className={classes.text} >
                Time to Study 
              </Typography>
            </Grid>
            <Grid item >
              <Input
                value={studyMinute}
                margin="dense"
                onChange={(e)=>{e.preventDefault(); if(!studying){setStudyMinute(e.target.value); setcurrentStudyMinute(e.target.value * 60);}}}
                // onBlur={handleBlur}
                inputProps={{
                  step: 5,
                  min: 0,
                  max: 180,
                  type: 'number',
                  // 'aria-labelledby': 'input-slider',
                }}
                disableUnderline
              />
              Mins
            </Grid>
            <Grid item style={{height: 300, padding: "1em"}}>
              <Slider
                orientation="vertical"
                min={0}
                max={studyMinute * 60}
                value={currentStudyMinute}
                marks={[
                  {value:currentStudyMinute, label: `${Math.floor(currentStudyMinute/60)}:${currentStudyMinute%60 < 10 ? "0" + currentStudyMinute%60 : currentStudyMinute%60}` }
                ]}
              />
            </Grid>
            <Grid item >
              <Button size="small" variant="contained" onClick={()=>{if(resting){setResting(!resting);}; setStudying(!studying);}}>{studying ? "Stop" : "Start"}</Button>
            </Grid>
          </Grid>
          

          <Grid item container direction="column" alignItems="center" justify="flex-start" spacing={1} xs={6} >
            <Grid item>
              <Typography className={classes.text} >
                Time to Rest 
              </Typography>
            </Grid>
            <Grid item>
              <Input
                value={restMinute}
                margin="dense"
                onChange={(e)=>{e.preventDefault(); if(!resting){setRestMinute(e.target.value); setcurrentRestMinute((e.target.value) * 60);}}}
                // onBlur={handleBlur}
                inputProps={{
                  step: 5,
                  min: 0,
                  max: 180,
                  type: 'number',
                  // 'aria-labelledby': 'input-slider',
                }}
                disableUnderline
              />
              Mins
            </Grid>
            <Grid item style={{height: 300, padding: "1em"}}>
              <Slider
                orientation="vertical"
                min={0}
                max={restMinute * 60}
                value={currentRestMinute}
                marks={[
                  {value:currentRestMinute, label: `${Math.floor(currentRestMinute/60)}:${currentRestMinute%60 < 10 ? "0" + currentRestMinute%60 : currentRestMinute%60}` }
                ]}
              />
            </Grid>
            <Grid item >
              <Button size="small" variant="contained" onClick={()=>{if(studying){setStudying(!studying)}; setResting(!resting);}}>{resting ? "Stop" : "Start"}</Button>
            </Grid>
          </Grid>

        </Grid>
      </Paper>
      </div>
    )
  }


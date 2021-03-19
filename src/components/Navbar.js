import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Toolbar, Typography } from '@material-ui/core';
import Time from './Time';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#000000",
        fontFamily: '"Courier New", Courier, monospace',
        color: "#ffffff",
        minWidth: 750,
    },
    paper: {
        position: "relative",
        width: "25vw",    
        height: "45vh",
        backgroundColor: "#a29bfe",
        borderRadius: 0,
        borderWidth: 0,
        cursor: "pointer",
    },
    question: {
        backgroundColor: "inherit",
        width: "100vw",
        height: "10vh",
        textAlign: "center",
        color: "#ffffff",
    }
}));

export default function Navbar({selectVibe}) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography variant="h5" style={{flexGrow: 11, fontFamily: '"Courier New", Courier, monospace', fontWeight: 600}}>
        StudyVIBE
      </Typography>
      <Button variant="contained" onClick={selectVibe} style={{flexGrow: 1}} >Change VIBE</Button>
      <Typography variant="h6" style={{flexGrow: 1, textAlign: "right"}} >
        <Time />
      </Typography>
    </Toolbar>
  );
}


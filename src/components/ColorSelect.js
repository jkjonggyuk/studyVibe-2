import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        fontFamily: '"Courier New", Courier, monospace',
    },
    question: {
        backgroundColor: "inherit",
        width: "100vw",
        height: "10vh",
        minHeight: "5em",
        textAlign: "center",
        color: "#ffffff",
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
}));

export default function ColorSelect({ isSelected, onItemClick }) {
  const classes = useStyles();
  const bgColors = ["#d8d3d6", "#f8fd89", "#b987dc", "#a5f7e1", "#96adfc", "#F8EFBA", "#ffb8b8", "#1e272e"]; 


  const handleClick = (event) => {
    document.querySelector("body").style.backgroundColor = event.target.style.backgroundColor;
    onItemClick();
  };
  const handleMouseOver = (event) => {
    event.target.style.opacity = "0.7";
  };
  const handleMouseLeave = (event) => {
    event.target.style.opacity = "1.0";
  };
  
  isSelected = true;

  return (
    <Grid container className={classes.root} spacing={0} direction="row">
      <Grid item xs={12} className={classes.question}>
          <h1>
              What's your VIBE today?
          </h1>
      </Grid>
      {/* <Grid item container xs={12} direction="column"> */}
        <Grid item container justify="center" spacing={0}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
            <Grid item>
              <Paper className={classes.paper} style={{backgroundColor: bgColors[value]}} onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
            </Grid>
              ))}
        </Grid>
      {/* </Grid> */}
    </Grid>
  );
}

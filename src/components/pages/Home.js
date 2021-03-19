import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ColorSelect from "../ColorSelect";
import Navbar from "../Navbar";
import Todo from "../Todo";
import Video from "../Video";
import Hello from "../Hello";
import TotalTimer from "../TotalTimer";
import Pomodoro from "../Pomodoro";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        margin: 0,
        flexGrow: 1,
        width: "100vw",
        height: "100vh",
        fontFamily: '"Courier New", Courier, monospace',
    },
    main: {
        paddingLeft: "auto",
        paddingRight: "auto",
        paddingBottom: "5em",

    },
    hello: {
        // position: "relative",
        // width: "50vw",    
        // backgroundColor: "blue",
    },
    totalTimer: {
        // position: "relative",
        // width: "50vw",    
        // backgroundColor: "red",
    },
    pomodoro: {
        // position: "relative",
        // width: "50vw",    
    },
    player: {
        // position: "relative",
        // width: "50vw",    
    },
    todo: {
        // position: "relative",
        // width: "50vw",    
    },
}));

function Home() {
    const classes = useStyles();

    const [isVibeSelected, setIsVibeSelected] = React.useState(false);
    const [showVideo, setShowVideo] = React.useState(true);

    const onItemClick = React.useCallback(
        () => {
            setIsVibeSelected(true);
        },
        []
    );

    const selectVibe = React.useCallback(
        () => {
        setIsVibeSelected(false);
        },
        []
    );

    const toggleVideo = () => {
        setShowVideo(!showVideo);
    }

    return (
        <div className={classes.root}>
            { !isVibeSelected ? 
                <ColorSelect isSelected={isVibeSelected} onItemClick={onItemClick} />
            :
                <div style={{width: "100%", position: "fixed", top: "auto", bottom: 0, zIndex: 1}}>
                    <Navbar selectVibe={selectVibe} />
                </div>
            }
            <Grid container className={classes.main} style={isVibeSelected ? {} : { display: 'none' }}>
                <Grid item container justify="center">
                    {/* <Grid item xs={1}>
                    </Grid> */}
                    <Grid item className={classes.hello} lg={5} xs>
                        <Hello />
                    </Grid>

                    <Grid item className={classes.totalTimer} lg={6} xs>            
                        <TotalTimer />
                    </Grid>
                    {/* <Grid item xs={1}>
                    </Grid> */}
                </Grid>

                <Grid item container justify="center" xs={12}>

                    <Grid item className={classes.todo} lg={3} xs>
                        {/* <button onClick={toggleVideo}>{showVideo ? "Hide Video" : "Show Video"}</button> */}
                        <Todo />
                    </Grid>

                    <Grid item container direction="row" justify="flex-start" alignContent="flex-start" lg={8} xs>
                        <Grid item className={classes.pomodoro} xs>
                            <Pomodoro /> 
                        </Grid>
                        <Grid item className={classes.player} style={isVibeSelected&&showVideo ? {} : { display: 'none' }} lg={6} xs>
                            <Video /> 
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            
            
        </div>
    );
}


export default Home;
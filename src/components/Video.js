import React, { useEffect } from 'react';
import ReactPlayer from "react-player"
import { Button, Grid, IconButton, makeStyles, Paper, Slider, TextField, Typography } from '@material-ui/core';
// import { findDOMNode } from 'react-dom'
// import { hot } from 'react-hot-loader'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';


const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: '"Courier New", Courier, monospace',
    padding: "1em",
    minWidth: 750,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto", 
    maxWidth: 800,
  },
  text: {
    fontFamily: '"Courier New", Courier, monospace',
  },
}));

export default function Video() {
    const classes = useStyles();

    // const [url, setUrl] = React.useState("https://soundcloud.com/royalty-free-audio-loops/sets/patreon-music");
    const [url, setUrl] = React.useState("https://soundcloud.com/daftpolymath/sets/royalty-free-lofi");
    const [customUrl, setCustomUrl] = React.useState("");
    const [playing, setPlaying] = React.useState(true);
    const [controls, setControls] = React.useState(false);
    const [volume, setVolume] = React.useState(0.8);
    const [muted, setMuted] = React.useState(false);
    const [loop, setLoop] = React.useState(true);
    const ref = React.useRef(null);

    useEffect(() => {
      setPlaying(true);
    }, [])

    const load = (url) => {
        setUrl(url);
    }
    
    const handlePlayPause = () => {
      setPlaying(!playing);
    }
    
    const handleVolumeChange = (e, v) => {
      // setVolume(parseFloat(e.target.value));
      setVolume(parseFloat(v / 100));
    }
    
    const handleToggleMuted = () => {
      setMuted(!muted);
    }
    
    const handlePlay = () => {
      setPlaying(true);
    }
    
    const handlePause = () => {
      setPlaying(false);
    }

    const handleNext = () => {
      ref.current.seekTo(parseFloat(0.99999));
    }
    
    const handleEnded = () => {
      setPlaying(loop);
    }

    return (
      <div className={classes.root} >
        <Paper className={classes.paper} elevation="3">

        
        <section className='section'>

          <div className='player-wrapper' style={{ display: "none" }}>
            <ReactPlayer
              ref={ref}
              className='react-player'
              width='100%'
              height='100%'
              url={url}
              playing={playing}
              controls={controls}
              loop={loop}
              volume={volume}
              muted={muted}
              // onReady={() => console.log('onReady')}
              // onStart={() => console.log('onStart')}
              onPlay={handlePlay}
              onPause={handlePause}
              // onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={handleEnded}
              onError={e => console.log('onError', e)}
            />
          </div>
        </section>

        <Grid container direction="column" alignItems="flex-start" justify="center" spacing={2}>
          <Grid item container justify="center" spacing={6}>
            <Grid item >
              <IconButton aria-label="playpause" onClick={handlePlayPause}>
                {playing ? 
                  <PauseIcon />
                  : <PlayArrowIcon /> 
                }
              </IconButton>
            </Grid>
            <Grid item >
              <IconButton aria-label="skipnext" onClick={handleNext}>
                <SkipNextIcon />
              </IconButton>
            </Grid>
            <Grid item >
              <IconButton aria-label="mute" onClick={handleToggleMuted} >
                {
                  muted ? 
                  <VolumeOffIcon />
                  : <VolumeMuteIcon />
                }
              </IconButton>
            </Grid>
          </Grid>

          <Grid item container justify="center" spacing={2}>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs={6}>
              <Slider min={0} max={100} value={parseFloat(volume*100)} onChange={handleVolumeChange} />
            </Grid>
            <Grid item>
              <VolumeUpIcon />
            </Grid>
          </Grid>
          
          <Grid item container justify="center" spacing={2}>
            <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/daftpolymath/sets/royalty-free-lofi")}>LoFi VIBE</Button>
            </Grid>
            {/* <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/suricolbert/sets/lofi-4-studying")}>LoFi VIBE II</Button>
            </Grid> */}
            <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/artyarty03/sets/related-tracks-royalty-free-1")}>Chill VIBE I</Button>
            </Grid>
            <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/ronny-matthes/sets/hintergrundmusik-cd-serie")}>Chill VIBE II</Button>
            </Grid>
            <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/freemusicpromote/sets/no-copyright-music-best-no")}>Endless VIBE</Button>
            </Grid>
            <Grid item >
              <Button variant="outlined" onClick={() => load("https://soundcloud.com/royalty-free-audio-loops/sets/exclusive-royalty-free-music")}>UpBeat VIBE</Button>
            </Grid>
          </Grid>

          <Grid item container justify="center" spacing={2} >
            <Grid item>
              <Typography className={classes.text} gutterBottom>
                Have your own VIBE? Custom URL : 
              </Typography>
            </Grid>
            <Grid item>
              <TextField value={customUrl} onChange={(e)=>setCustomUrl(e.target.value)} type='text' helperText='YouTube playlist link, SoundCloud link, etc.' />
            </Grid>
            <Grid item>
              <Button size="small" variant="contained" onClick={() => {if(customUrl.trim()){setUrl(customUrl);} setPlaying(true)}}>Load VIBE</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>
    )
  }


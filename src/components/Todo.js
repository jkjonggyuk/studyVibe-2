import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Grid, IconButton, List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteFromLocalStorage, getFromLocalStorage, setToLocalStorage } from '../service';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    fontFamily: '"Courier New", Courier, monospace',
    padding: "1em",
    width: 350,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto", 
    maxWidth: 800,
  },
  text: {
    // flexGrow: 1,
    fontFamily: '"Courier New", Courier, monospace',
  },
  todoItem: {
    // width: "30%",
    minWidth: 300,
    // alignContent: "center",
  },
}));

export default function Todo() {
    const classes = useStyles();

    const [todoInput, setTodoInput] = useState("");
    const [todoItems, setTodoItems] = useState(getFromLocalStorage("todo") || []);

    useEffect(() => {
      setTodoItems(getFromLocalStorage("todo"));
    }, [])

    return (
      <div className={classes.root} >
        <Paper className={classes.paper} elevation="3">

          <Grid container direction="column" alignItems="center" justify="center" spacing={2}>
            <Grid item>
              <Typography className={classes.text} gutterBottom>
                Add TODO Items 
              </Typography>
            </Grid>
            <Grid xs direction="row" justify="space-around" component="form" item container onSubmit={() => {setToLocalStorage("todo", todoInput); setTodoInput(""); setTodoItems(getFromLocalStorage("todo"))}}>
              <Grid item xs={8} >
                  <TextField type='text' fullWidth value={todoInput} onChange={(v) => {setTodoInput(v.target.value)}} />
              </Grid>
              <Grid item xs={2} >
                  <Button size="small" variant="contained" type="submit">Add</Button>
              </Grid>
            </Grid>

            <Grid item container justify="center" spacing={2} >
              <List className={classes.todoItem}>
                {todoItems.map((value) => {
                  return (
                    <ListItem key={value.id} role={undefined} dense button >
                      <ListItemIcon >
                        <Checkbox 
                          edge="start"
                          disableRipple
                        />
                      </ListItemIcon>
                      <ListItemText id={value.id} primary={value.item} />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={(e) => {deleteFromLocalStorage("todo", value.id); setTodoItems(getFromLocalStorage("todo"));}}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                )})}
              </List>
            </Grid>

          </Grid>
        </Paper>
      </div>
    )
  }


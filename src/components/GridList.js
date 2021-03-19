import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridList';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <GridList cellHeight={160} className={classes.gridList} cols={3}>
    <GridListTile key="Hi" cols="1">
      <img src="asfd" alt="asfd" />
      HIHIHI
    </GridListTile>
    <GridListTile key="Hi" cols="1">
      <img src="asfd" alt="asfd" />
      HIHIHI
    </GridListTile>
    <GridListTile key="Hi" cols="1">
      <img src="asfd" alt="asfd" />
      HIHIHI
    </GridListTile>
</GridList>
  );
}

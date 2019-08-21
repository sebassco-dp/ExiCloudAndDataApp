import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200,
  },
});

export default function ImageAvatars(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt={props.name} src={props.imgSrc} className={classes.bigAvatar} />
    </Grid>
  );
}
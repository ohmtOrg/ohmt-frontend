import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  large: {
    width: 50,
    height: theme.spacing(7),
  },
}));

export default function IconAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Avatar className={classes.green} src='/assets/images/faologo.png' style={{
    margin: "2px",
    width: "150px",
    height: "60px",
  }}
  className={classes.large}>
        {/* <AssignmentIcon /> */}
      </Avatar>
    </div>
  );
}

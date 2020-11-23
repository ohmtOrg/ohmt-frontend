import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import history from "history.js";
// import  Brand from '../../../MatxLayout/SharedCompoents/Brand'
import Icon from './icon'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor:'white',
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;
  const handleLogin=()=>{
    history.push({
      pathname: "/session/signin"
    });
  }

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="primary"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Icon/>
         {/* <Brand/>
         <div className="username-photo">
          <img src='/assets/images/fao.png' alt="user" />
        </div> */}
        </Typography>
    
      
        <Button variant="outlined" size="small" color="primary" onClick={handleLogin}>
          Sign up
        </Button>
      </Toolbar>
     
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
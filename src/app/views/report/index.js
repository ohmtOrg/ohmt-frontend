import React, { Fragment,useState } from "react";
import Scrollbar from "react-perfect-scrollbar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
Paper,
  Icon,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";

import { navigations } from "../../navigations";
import { MatxVerticalNav } from "matx";
import Chart from '../Evaluation/chart';
import { AddImp } from "../../redux/actions/PerformamceAction";
// import ResultChart from './chart'

import clsx from 'clsx';
import { Bar } from 'react-chartjs-2';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Box,
  Button,
  Card,
  Grid,
  CardContent,
  CardHeader,
  Divider,
  colors 
  
//   makeStyles,
//   colors
} from '@material-ui/core';
import {useTheme, makeStyles } from '@material-ui/core/styles';
// import from '@material-ui/core/colors'
import indigo from  '@material-ui/core/colors/indigo';
import grey from  '@material-ui/core/colors/grey'
import red from  '@material-ui/core/colors/red'
import green from  '@material-ui/core/colors/green'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import {reference } from '../data'


const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 
  
const Graphs = props => {
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const reftools=reference;

  const  handleClickOpen=() =>{
    setOpen(true);
  }

  const  handleClose=()=> {
    setOpen(false);
  }
    let {impl ,gov, AddImp } = props;

    console.log(props)


  return (
    <Fragment>
      <div>


     
      
<Card
 
 >
   <CardHeader
     action={(
       <Button
         endIcon={<ArrowRightIcon  />}
         size="small"
         variant="outlined" color="primary"
         onClick={handleClickOpen}
       >
        View Recomended tools 
       </Button>
     )}
     title={`Report Of your scores and recomended tools to increase scores `}
   />
   <Divider />
   <CardContent>
     
  <Grid
              container
              spacing={3}
            >
    
                <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                  <Box
       
       position="relative"
     >
      <Chart valu={gov} ll='Governance' /> 
     </Box>
     </Grid>
     <Grid
                  item
                  lg={12}
                  md={12}
                  xs={12}
                >
                   <Box
       
       position="relative"
     >
     <Chart valu={impl} ll='Implementation and performance' /> 
     </Box>
     </Grid>
     </Grid>
     
    
   </CardContent>
   <Divider />
   <Box
     display="flex"
     justifyContent="flex"
     p={2}
   >
     
      <Button
         endIcon={<ArrowRightIcon  />}
         size="small"
         variant="outlined" color="primary"
         onClick={handleClickOpen}
       >
         View recommended tools 
       </Button>
   </Box>
 </Card>
 <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Recomended tools 
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
      <Card elevation={3} className="pt-5 mb-6">
      <div className="card-title px-6 mb-3">Refernce tools based on your scoring </div>
      <div className="overflow-auto">
        
        <Paper className={classes.paper}>
        <Table className="whitespace-pre">
        <TableHead>
          <TableRow>
            <TableCell className="px-0" >Title</TableCell>
            <TableCell className="px-0">Description</TableCell>
            <TableCell className="px-0">Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reference.map((rectool, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left">
                {rectool.title}
              </TableCell>
             
              <TableCell className="px-0 capitalize">
                ${rectool.description}
              </TableCell>
              <TableCell className="px-0">
                <Button color="secondary" href={rectool.href} target='blank'>
                  Visit 
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Paper>
      </div>
    </Card>
      </Dialog>
 </div>
      {/* <ResultChart impl={impl} ll='Implementation and performance'/> */}
      {/* <Chart valu={impl} ll='Implementation and performance' />  */}
    </Fragment>
  );
};

Graphs.propTypes = {
    AddImp: PropTypes.func.isRequired,
  gov: PropTypes.object.isRequired,
  impl: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    AddImp: PropTypes.func.isRequired,
  gov: state.performance.gov,
  impl: state.performance.impl
});

export default withRouter(
  connect(mapStateToProps, {
    AddImp
  })(Graphs)
);
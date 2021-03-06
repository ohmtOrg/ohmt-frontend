import React, { Fragment } from "react";

import {
Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";



import { withStyles } from "@material-ui/styles";


import {
 
  Button,
  Card,
 
  Container

} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Slide from "@material-ui/core/Slide";
import { ref_tools, ref_resources } from '../data'


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
    margin: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
 
  
const RecTool = props => {
  
  const classes = useStyles();


  return (
    <Fragment>
 
    
        <Container>
      <Card elevation={3} className="pt-5 mb-6">
      <div className="card-title px-6 mb-3">Resource materials / Guidelines  </div>
      {/* <div className="card-title px-6 mb-3">Reference OH tools and resources promoting multi-sectoral and multidisciplinary collaboration and coordination </div> */}
      <div className="overflow-auto">
        
        <Paper className={classes.paper}>
        <Table className="whitespace-pre">
        <TableHead>
          <TableRow>
            <TableCell className="px-0"  colSpan={3}>Title</TableCell>
            <TableCell className="px-0" colSpan={8}>Description</TableCell>
            <TableCell className="px-0" colSpan={2}>Link</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {ref_tools.map( (rectool, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left" colSpan={3}>
                {rectool.title}
              </TableCell>
             
              <TableCell className="px-0 capitalize" colSpan={8}>
                {rectool.description}
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
                <Button color="primary" href={rectool.href} target='blank'>
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

    <Card elevation={3} className="pt-5 mb-6">
      <div className="card-title px-6 mb-3">Reference tools </div>
      <div className="overflow-auto">
        
        <Paper className={classes.paper}>
        <Table className="whitespace-pre">
        <TableHead>
          <TableRow>
            <TableCell className="px-0"  colSpan={3}>Title</TableCell>
            <TableCell className="px-0" colSpan={8}>Description</TableCell>
            <TableCell className="px-0" colSpan={2}>Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ref_resources.map( (rectool, index) => (
            <TableRow key={index}>
              <TableCell className="px-0 capitalize" align="left" colSpan={3}>
                {rectool.title}
              </TableCell>
             
              <TableCell className="px-0 capitalize" colSpan={8}>
                {rectool.description}
              </TableCell>
              <TableCell className="px-0" colSpan={2}>
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
    </Container>
      
    </Fragment>
  );
};

export default withStyles({}, { withTheme: true })(RecTool);

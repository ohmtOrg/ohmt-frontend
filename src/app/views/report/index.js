// import React, { Fragment, useState } from "react";
// // import Scrollbar from "react-perfect-scrollbar";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {
//   Paper,
//   Icon,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody
// } from "@material-ui/core";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
// // import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// // import { Breadcrumb, SimpleCard } from "matx";
// // import Radio from "@material-ui/core/Radio";
// // import RadioGroup from "@material-ui/core/RadioGroup";
// // import FormControlLabel from "@material-ui/core/FormControlLabel";
// // import Tooltip from '@material-ui/core/Tooltip';


// // import { navigations } from "../../navigations";
// // import { MatxVerticalNav } from "matx";
// import Chart from '../Evaluation/chart';
// // import { AddImp } from "../../redux/actions/PerformamceAction";
// // import ResultChart from './chart'

// // import clsx from 'clsx';
// // import { Bar } from 'react-chartjs-2';
// // import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// // import DialogActions from "@material-ui/core/DialogActions";
// // import DialogContent from "@material-ui/core/DialogContent";
// // import DialogContentText from "@material-ui/core/DialogContentText";
// // import DialogTitle from "@material-ui/core/DialogTitle";
// import {
//   Box,
//   Button,
//   Card,
//   Grid,
//   CardContent,
//   CardHeader,
//   Divider,
//   // colors ,
//   Container

//   //   makeStyles,
//   //   colors
// } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// // import from '@material-ui/core/colors'
// // import indigo from  '@material-ui/core/colors/indigo';
// // import grey from  '@material-ui/core/colors/grey'
// // import red from  '@material-ui/core/colors/red'
// // import green from  '@material-ui/core/colors/green'
// // import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// // import ListItemText from "@material-ui/core/ListItemText";
// // import ListItem from "@material-ui/core/ListItem";
// // import List from "@material-ui/core/List";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import CloseIcon from "@material-ui/icons/Close";
// import Slide from "@material-ui/core/Slide";
// import { reference } from '../data'


// const useStyles = makeStyles(theme => ({
//   appBar: {
//     position: "relative"
//   },
//   title: {
//     marginLeft: theme.spacing(2),
//     flex: 1
//   },
//   paper: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
// }));

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });


// const Graphs = props => {

//   const classes = useStyles();
//   // const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   // const reftools=reference;

//   const handleClickOpen = () => {
//     setOpen(true);
//   }

//   const handleClose = () => {
//     setOpen(false);
//   }
//   let { impl, gov, govfeedback, impfeedback } = props;
//   const filtered = gov.filter(e => e.value < 3)


//   const filtered2 = impl.filter(e => e.value < 3)
//   // console.log('filteredt two', filtered2)
//   // console.log('filteredt one', filtered)
//   const fil = [...filtered, ...filtered2]
//   console.log(reference)
//   // reference.filter(fucntion (e) {
//   // return e
//   // })
//   reference.map(ob => {

//     if (ob.catId < 10) {
//       let results = fil.filter(f => ob.catId === parseInt(f.id / 100)).map(obj => {
//         return obj.id
//       });
//       const res2 = results.filter(f => {
//         return ob.id
//       })
//       ob.sc = [...results]

//     } else if (ob.catId < 100) {
//       let results = fil.filter(f => ob.catId === parseInt(f.id / 10)).map(obj => {
//         return obj.id
//       });
//       ob.sc = [...results]

//     }
//     else {
//       let results = fil.filter(f => ob.catId === parseInt(f.id)).map(obj => {
//         return obj.catId
//       });
//       ob.sc = [...results]

//     }
//   })
//   console.log('ref', reference)

//   // const filteredRef=reference.filter(f => f.sc.length>0) 

//   return (
//     <Fragment>
//       <div>




//         <Card

//         >
//           <CardHeader
//             action={(
//               <Button
//                 endIcon={<ArrowRightIcon />}
//                 size="small"
//                 variant="outlined" color="primary"
//                 onClick={handleClickOpen}
//               >
//                 View Recomended tools
//               </Button>
//             )}
//             title={`Report of the assessment and recomended one health tools to address gaps identified`}
//           />
//           <Divider />
//           <CardContent>

//             <Grid
//               container
//               spacing={3}
//             >
//   <Grid
//                 item
//                 lg={6}
//                 md={12}
//                 xs={12}
//               >
//               <Grid
//                 item
//                 lg={12}
//                 md={12}
//                 xs={12}
//               >
//                 <Box

//                   position="relative"
//                 >
//                   <Chart valu={gov} ll='Governance' />
//                 </Box>
//               </Grid>
//               <Divider />
//               <Box
//                 display="flex"
//                 justifyContent="flex"
//                 p={2}
//                 mt={3}
//                 mb={5}
//               >

//                 <Typography color="inherit">Comments: {govfeedback}</Typography>
//               </Box>
//               </Grid>
//               <Grid
//                 item
//                 lg={12}
//                 md={12}
//                 xs={12}
//               >
//               <Grid
//                 item
//                 lg={12}
//                 md={12}
//                 xs={12}
//               >
//                 <Box

//                   position="relative"
//                 >
//                   <Chart valu={impl} ll='Implementation and performance' />
//                 </Box>
//               </Grid>
            
//             <Divider />
//           <Box
//             display="flex"
//             justifyContent="flex"
//             p={2}
//             mt={3}
//             mb={5}
//           >

//             <Typography color="inherit">Comments: {impfeedback}</Typography>
//           </Box>
//           </Grid>
// </Grid>
//           </CardContent>
         
//         </Card>
//         <Dialog
//           fullScreen
//           open={open}
//           onClose={handleClose}
//           TransitionComponent={Transition}
//         >
//           <AppBar className={classes.appBar}>
//             <Toolbar>
//               <IconButton
//                 edge="start"
//                 color="inherit"
//                 onClick={handleClose}
//                 aria-label="Close"
//               >
//                 <CloseIcon />
//               </IconButton>
//               <Typography variant="h6" className={classes.title}>
//                 Recomended tools
//               </Typography>
//               <Button color="inherit" onClick={handleClose}>
//                 close
//               </Button>
//             </Toolbar>
//           </AppBar>
//           <Container>
//             <Card elevation={3} className="pt-5 mb-6">
//               <div className="card-title px-6 mb-3">Reference tools based on your scoring</div>
//               <div className="overflow-auto">

//                 <Paper className={classes.paper}>
//                   <Table className="whitespace-pre">
//                     <TableHead>
//                       <TableRow>
//                         <TableCell className="px-0" colSpan={3}>Title</TableCell>
//                         <TableCell className="px-0" colSpan={8}>Description</TableCell>
//                         <TableCell className="px-0" colSpan={2}>Link</TableCell>
//                         <TableCell className="px-0" colSpan={4}>Reason</TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {reference.filter(f => f.sc.length > 0).map((rectool, index) => (
//                         <TableRow key={index}>
//                           <TableCell className="px-0 capitalize" align="left" colSpan={3}>
//                             {rectool.title}
//                           </TableCell>

//                           <TableCell className="px-0 capitalize" colSpan={8}>
//                             {rectool.description}
//                           </TableCell>
//                           <TableCell className="px-0" colSpan={2}>
//                             <Button color="secondary" href={rectool.href} target='blank'>
//                               Visit
//                             </Button>
//                           </TableCell>
//                           <TableCell className="px-0" colSpan={4}>
//                             {((rectool.catId === 1) || (rectool.catId >= 10 && rectool.catId < 20) || (rectool.catId >= 100 && rectool.catId < 200)) && (
//                               <Typography >because you scored under 3 in Governance  domain  </Typography>
//                             )}
//                             {((rectool.catId === 2) || (rectool.catId >= 20 && rectool.catId < 100) || (rectool.catId >= 200 && rectool.catId < 300)) && (
//                               <Typography >because you scored under 3 in Implementation and Performance domain </Typography>
//                             )}
//                           </TableCell>
//                           {/* <ExpansionPanel> */}
//                           {/* <ExpansionPanelSummary
//                 expandIcon={<ExpandMoreIcon />}
//                 aria-controls="panel1a-content"
//                 id="panel1a-header"
//               >
                
//                 <TableCell className="px-0" colSpan={1}>
                
//                 <Typography className={classes.heading}>Why ?</Typography>
                
//               </TableCell>
              
            
//               </ExpansionPanelSummary> */}
//                           {/* <ExpansionPanelDetails>
//               <RadioGroup
//                 aria-label="Gender"
//                 name="gender1"
//                 className={classes.group}
//                 value={v.value}
//                 onChange={handleChange(v.id)}
//               >
//                    {fil.filter(f=> f.id.inlude(rectool.sc)).map((option,ind) => (
//                      <>
//                       <Tooltip
//                       title={
//                         <React.Fragment>
//                           <Typography color="inherit">becouse you scored low</Typography>
//                           {option.name}
                          
//                         </React.Fragment>
//                       }
//                     >
//                      <FormControlLabel value={option.value} control={<Radio />} label= {option.value+': '+v.scores[ind]}  />
                     
//                      </Tooltip>
//                      <div className="py-3" />
//                      </>
//                     ))}
             
//               </RadioGroup>
//               </ExpansionPanelDetails> */}
//                           {/* </ExpansionPanel> */}
//                         </TableRow>

//                       ))}
//                     </TableBody>
//                   </Table>
//                 </Paper>
//               </div>
//             </Card>
//           </Container>
//         </Dialog>
//       </div>
//       {/* <ResultChart impl={impl} ll='Implementation and performance'/> */}
//       {/* <Chart valu={impl} ll='Implementation and performance' />  */}
//       <Divider />
//       <Box
//         mt={3}
//         mb={3}
//       >

//         <Button color="primary" variant="contained" type="submit">
//           <Icon>send</Icon>
//           <span className="pl-2 capitalize">Submit</span>
//         </Button>
//       </Box >
//     </Fragment>
//   );
// };

// Graphs.propTypes = {
//   AddImp: PropTypes.func.isRequired,
//   gov: PropTypes.object.isRequired,
//   impl: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   AddGovFeedback: PropTypes.func.isRequired,
//   AddImpFeedback: PropTypes.func.isRequired,
//   gov: state.performance.gov,
//   impl: state.performance.impl,
//   govfeedback: state.performance.govfeedback,
//   impfeedback: state.performance.impfeedback,
// });

// export default withRouter(
//   connect(mapStateToProps, {

//   })(Graphs)
// );

import React, { useState, useEffect } from 'react'
import  Breadcrumb  from 'matx/components/Breadcrumb'
import Axios from 'axios'
import MUIDataTable from 'mui-datatables'
import { connect } from "react-redux";
import { GetReports } from "../../redux/actions/ReportAction";

import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

const SimpleMuiTable = props => {
    const [isAlive, setIsAlive] = useState(true)
    const [userList, setUserList] = useState([])
    const [reportList, setReportList] = useState([])

    useEffect(() => {
        console.log('component mounted sucessfully')
        GetReports()
        Axios.get('/api/user/all').then(({ data }) => {
            if (isAlive) setReportList(reports)
        })
        return () => setIsAlive(false)
      }, [isAlive]);
    
      
        let { theme,GetReports ,reports} = props;

    // useEffect(() => {
        
    //     Axios.get('/api/user/all').then(({ data }) => {
    //         if (isAlive) setUserList(data)
    //     })
    //     return () => setIsAlive(false)
    // }, [isAlive])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'All Report ', path: '/pages' },
                        { name: 'Users Reports' },
                    ]}
                />
            </div>
            <MUIDataTable
                title={'User Reports'}
                data={productList}
                columns={columns}
                options={{
                    filterType: 'textField',
                    responsive: 'simple',
                    selectableRows: 'none', // set checkbox for each row
                    // search: false, // set search option
                    // filter: false, // set data filter option
                    // download: false, // set download option
                    // print: false, // set print option
                    // pagination: true, //set pagination option
                    // viewColumns: false, // set column option
                    elevation: 0,
                    rowsPerPageOptions: [10, 20, 40, 80, 100],
                }}
            />
        </div>
    )
}

const columns = [
    {
        name: 'Country', // field name in the row object
        label: 'Country', // column title that will be shown in table
        options: {
            filter: true,
        },
    },
    {
        name: 'Region',
        label: 'Region',
        options: {
            filter: true,
        },
    },
    {
        name: 'impl',
        label: 'Peroformance Avg Score',
        options: {
            filter: true,
        },
    },
    {
        name: 'gov',
        label: 'Governance Avg Score',
        options: {
            filter: true,
        },
    },
    {
        name: 'done_at',
        label: 'Date Of submittion',
        options: {
            filter: true,
        },
    },
]




    const mapStateToProps = state => ({
        // setUser: PropTypes.func.isRequired
        reports: state.Report.reports,
        GetReports: PropTypes.func.isRequired,
      
      });
      export default withStyles({}, { withTheme: true })(
        withRouter(connect(mapStateToProps, { GetReports })(SimpleMuiTable))
      );

      const productList = [
        {
          imgUrl: "/assets/images/products/headphone-2.jpg",
          Region: "Est Africa",
          Country: "Rwanda",
          impl: 2,
          gov: 4,
          done_at: "12/06/2021",
          available: 15
        },
        {
          imgUrl: "/assets/images/products/headphone-3.jpg",
          Region: "Est Africa",
          Country: "Kenya",
          impl: 3,
          gov: 2,
          done_at: "12/06/2021",
          available: 30
        },
        {
          imgUrl: "/assets/images/products/iphone-2.jpg",
          Region: "South Africa",
          Country: "Seyshel",
          impl: 3,
          gov: 4,
          done_at: "12/06/2021",
          available: 35
        },
        {
          imgUrl: "/assets/images/products/iphone-1.jpg",
          Region: "MEast Afica",
          Country: "Uganda",
          impl: 3,
          gov: 1,
          done_at: "12/06/2021",
          available: 0
        },
        {
          imgUrl: "/assets/images/products/headphone-3.jpg",
          Region: "West Afica",
          Country: "Nigeria",
          impl: 4,
          gov: 1,
          done_at: "12/06/2021",
          available: 5
        }
      ];
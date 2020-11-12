import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import {goverd} from '../Evaluation/data'
// import { AddImp } from "../../redux/actions/PerformamceAction";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ impl,className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const  handleClickOpen=() =>{
    setOpen(true);
  }

  const  handleClose=()=> {
    setOpen(false);
  }

//   const {impl , AddImp } = props;
  const valu =impl 
  let colo=[grey[500],grey[300],grey[100], indigo[300],indigo[500]]
  let lbls=valu.map(a=>a.name)
  let points=valu.map(a=>a.value)
  let col=valu.map(a=>colo[a.value-1])
  const data = {
    datasets: [
      {
        backgroundColor:[...col],
        data: [...points],
        // label: [...lbls]
      }
      
    ],
    labels: [...lbls]
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <div>
   <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowRightIcon  />}
            size="small"
            variant="outlined" color="primary"
            onClick={handleClickOpen}
          >
            Add Feedback
          </Button>
        )}
        title="Result of your scores and recomended tools "
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View All your repors
        </Button>
      </Box>
    </Card>
   <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Feedback</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add the general feedback regarding your score records
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="feedback"
            label="Feedback "
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    
  );
};

Sales.propTypes = {
  className: PropTypes.string
};
export default Sales 


// const mapStateToProps = state => ({
//     AddImp: PropTypes.func.isRequired,
//   gov: state.performance.gov,
//   impl: state.performance.impl
// });

// export default withRouter(
//   connect(mapStateToProps, {
//     AddImp
//   })(Sales)
// );
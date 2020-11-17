import React,{useState} from "react";
import history from "history.js";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Breadcrumb, SimpleCard } from "matx";
import Radio from "@material-ui/core/Radio";
import Tooltip from '@material-ui/core/Tooltip';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import Chart from "./chart"

import { AddImp } from "../../redux/actions/PerformamceAction";
import {implemData} from './data'
const subcateg=[
  {name:"Institutional capacity development",id:21,value:1},
    {name:"Workforce and technical capacity development",id:22,value:1},
    {name:"One Health prirorities  ",id:23,value:1}
]
const states = [
  {
    value: 1,
    label: '1'
  },
  {
    value: 2,
    label: '2ddd'
  },
  {
    value: 3,
    label: '3'
  },
  {
    value: 4,
    label: '4'
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

 function  Implementation() {
  const classes = useStyles();
  const [val,setVal]=useState([...implemData])

  const handleChange= index=>e=>{
    const newArr=[...val]
    
    let ob=newArr.findIndex(ar=>ar.id==index)
    if (e.target.name=='feedback'){
      newArr[ob].feedback=e.target.value
    }else{newArr[ob].value=parseInt(e.target.value)}
    
    
    setVal(newArr)
  }
  const  handleFormSubmit = (event) => {
    history.push({
      pathname: "/result/governance"
    });
    AddImp({ ...val });
   
  };

  return (
    <>
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Inplementation and performance" }
          ]}
        />
      </div>
      {subcateg.map((a,ind)=>(
        <>
      <SimpleCard title={a.name}>
      <div className={classes.root}>
      {implemData.filter((a)=>((a.id>((ind+1)*10)+200)&&(a.id<((ind+2)*10)+200))).map((v,index) => ( 
       
        <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{v.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          className={classes.group}
          value={v.value}
          onChange={handleChange(v.id)}
        >
             {states.map((option,ind) => (
               <>
                  <Tooltip
                  title={
                    <React.Fragment>
                      <Typography color="inherit">Question</Typography>
                      {v.qs[ind]}
                    </React.Fragment>
                  }
                >
               <FormControlLabel value={option.value} control={<Radio />} label= {option.value+': '+v.scores[ind]}  />
               </Tooltip>
               <div className="py-3" />
               </>
              ))}
       
        </RadioGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
))}
 </div>
      </SimpleCard>
      <div className="py-3" />
      </>
))} 
{/* <Chart valu={val} ll='Implementation and performance' />  */}

    </div>
    <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Save
        </Button>
    </>
  );
}
const mapStateToProps = state => ({
  AddImp: PropTypes.func.isRequired,
  // val: state.login
});
export default (connect(mapStateToProps, { AddImp })(Implementation))
;
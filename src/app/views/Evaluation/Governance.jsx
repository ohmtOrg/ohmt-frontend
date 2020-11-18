import React,{useState} from "react";
import history from "history.js";
import { makeStyles,withStyles, } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Breadcrumb, SimpleCard } from "matx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { AddGov } from "../../redux/actions/PerformamceAction";
import {goverd} from './data'
import { values } from "lodash";
// import Chart from "./chart"
const subcateg=[
  {name:"One Health Institutional Policy ",id:11,value:1},
    {name:"Advocacy strategy",id:12,value:1},
    {name:"Monitoring and Evaluation",id:23,value:1},
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

 function Governance() {
  const classes = useStyles();
  const [val,setVal]=useState([...goverd])

  const handleChange= index=>e=>{
    const newArr=[...val]
    
    let ob=newArr.findIndex(ar=>ar.id==index)
    if (e.target.name=='feedback'){
      newArr[ob].feedback=e.target.value
    }else{newArr[ob].value=parseInt(e.target.value)}
    
    
    setVal(newArr)
  }
  const  handleFormSubmit = event => {
    // console.log(AddGov)
    history.push({
      pathname: "/evaluation/implementatiom"
    });
    AddGov({ ...val });
    
  };

  return (
    <>
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Governance" }
          ]}
        />
      </div>
      {subcateg.map((a,ind)=>(
        <>
      <SimpleCard title={a.name}>
      <div className={classes.root}>
      {goverd.filter((a)=>((a.id>((ind+1)*10)+100)&&(a.id<((ind+2)*10)+100))).map((v,index) => ( 
         
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
                  <>
                    {v.qs[ind]?(
                      <React.Fragment>
                        <Typography color="inherit">Questions</Typography>
                            {v.qs[ind]} </React.Fragment>
                    ):(
                      <React.Fragment>
                      <Typography color="inherit">No Questions</Typography>
                      </React.Fragment>
                    )}
                   
                    
             </>     
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
          Save and continue 
        </Button>
    </>
  );
}
const mapStateToProps = state => ({
  AddGov: PropTypes.func.isRequired,
  // val: state.login
});
export default (connect(mapStateToProps, { AddGov })(Governance))
;
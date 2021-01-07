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
// import { withRouter } from "react-router-dom";
// import indigo from  '@material-ui/core/colors/indigo';
import grey from  '@material-ui/core/colors/grey'
import purple from  '@material-ui/core/colors/purple'

import { AddGov } from "../../redux/actions/PerformamceAction";
import {goverd} from './data'
// import { values } from "lodash";
import { Divider } from "@material-ui/core";
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

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
  },
}));

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

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
    
    newArr[ob].value=parseInt(e.target.value)
    
    
    setVal(newArr)
  }
  const  handleFormSubmit = event => {
    // console.log(AddGov)
    history.push({
      pathname: "/evaluation/implementatiom"
    });
    AddGov({ ...val });
    
  };
  let colo=[grey[200],purple[200],grey[500]]
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
        <div>
      <SimpleCard title={a.name}  >
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
                <HtmlTooltip
        title={
          <>
          {v.qs[ind]?(
            <React.Fragment>
              <Typography color="inherit">Questions</Typography>
              <p dangerouslySetInnerHTML={{__html: v.qs[ind]}}/> 
              </React.Fragment>
                    ):(
                      <React.Fragment>
                      <Typography color="inherit">No Questions</Typography>
                      </React.Fragment>
                    )}   
                    
             </>
              }
              >
               <FormControlLabel value={option.value} control={<Radio />} label= {option.value+': '+v.scores[ind]}  />
               
               </HtmlTooltip>
              
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
      <Divider style={{ color: colo[ind] }}/>
      </div>
      
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
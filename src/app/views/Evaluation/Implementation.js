import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Breadcrumb, SimpleCard } from "matx";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

export default function SimpleExpansionPanel() {
  const classes = useStyles();
  const [value, setValue] = React.useState("female");
  const [val,setVal]=useState([...implemData])

  const handleChange= index=>e=>{
    const newArr=[...val]
    
    let ob=newArr.findIndex(ar=>ar.id==index)
    if (e.target.name=='feedback'){
      newArr[ob].feedback=e.target.value
    }else{newArr[ob].value=parseInt(e.target.value)}
    
    
    setVal(newArr)
  }

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
               
               <FormControlLabel value={option.value} control={<Radio />} label= {v.scores[ind]}  />
             
              ))}
       
        </RadioGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
))}
 </div>
      </SimpleCard>
))}
      
     
   
     
    </div>
    </>
    
  );
}

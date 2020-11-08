import React, { Component, Fragment } from "react";
import { Grid, Card,Container,Box } from "@material-ui/core";

import DoughnutChart from "../charts/echarts/Doughnut";

import ModifiedAreaChart from "./shared/ModifiedAreaChart";
import StatCards from "./shared/StatCards";
import TableCard from "./shared/TableCard";
import RowCards from "./shared/RowCards";
import StatCards2 from "./shared/StatCards2";
import UpgradeCard from "./shared/UpgradeCard";
import Campaigns from "./shared/Campaigns";
import { withStyles } from "@material-ui/styles";

export const definitions = [
    {
      
      description: 'The process of decision-making and the process by which decisions are implemented and enforced',
      title: 'Governance',
      
    },
    {

      description: 'Any organization, institution, body or structure mandated to exercise any executive and administrative functions contemplated by the operative agreements (Policies, SOP’s, MOU’s etc.) ',
     
      title: 'Entity',
     
    },
    {
      
      
      description: "A structure is a system that outlines how certain activities are directed in order to achieve specific goals. These activities can include rules, roles, responsibilities and determines how information flows between different. A formal structure helps ensure mechanisms are functional, effective, and sustainable.",
      
      title: 'Structure',
      
    },
    {
      
        description: 'A real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful. A framework is generally more comprehensive than a protocol and more prescriptive than a structure.',
        title: 'Framework',
        
      },
      {
  
        description: 'A process or system that is used to produce a particular result ',
       
        title: 'Mechanism',
       
      },
      {
        
        
        description: "A person or organization that has the legally delegated or invested authority, capacity, or power to perform a designated function. ",
        
        title: 'Competent authority',
        
      },
      {
      
        description: 'Process of carrying out an execution of a plan that can be accomplished in in sequence',
        title: 'Implementation',
        
      },
      {
  
        description: "Process that monitors and reports on a program's progress and accomplishments by using pre-selected performance measures.",
       
        title: 'Performance',
       
      },
      {
        
        
        description: "A document which describes the regularly recurring operations to carry out the activities correctly and always in the same manner.",
        
        title: 'Standar Operating Procedure',
        
      },
      {
      
        description: 'The process of multilateral and/or bilateral agencies joining and collaborating together to achieve a set of defined goals or tragets ',
        title: 'Interagency',
        
      },
      {
  
        description: 'Financial resources set aside to cover unexpected events that can be stressful and costly ',
       
        title: 'Emergency fund',
       
      },
      {
       
        description: "Set of modules, learning package that helps employees learn specific knowledge or skills to improve performance in their current roles",
        title: 'Training program',
        
      },




      {
  
        description: 'An alternative to a degree program. Certificate programs are short-term training programs that often take less time to complete than a degree. ',
       
        title: 'Certification program',
       
      },
      {
        
        
        description: "",
        
        title: 'Acredited program ',
        
      },
      {
      
        description: 'Strategy generally involves setting goals, determining actions ways/means to achieve the goals, and mobilizing resources to execute the actions. A strategy describes how the ends (goals) will be achieved by the means (resources) and actions (activities) ',
        title: 'Strategy',
        
      },
      {
  
        description: "A document that lists what steps must be taken in order to achieve a specific goal. The purpose of an action plan is to clarify what resources are required to reach the goal, formulate a timeline for when specific tasks need to be completed and determine what resources are required.",
       
        title: 'Action plan',
       
      },
      {
        
        
        description: "It takes the purpose and goals you've outlined in an action plan and adds the details needed to turn thought into action",
        
        title: 'Strategic action plan',
        
      },
      {
      
        description: 'A policy is a deliberate system of principles to guide decisions and achieve rational outcomes. A policy is a statement of intent and is implemented as a procedure or protocol. Policies are generally adopted by a governance body within an organization. ',
        title: 'Policy',
        
      },
      {
  
        description: 'Consists of policies, legislation (and by-laws), and governance structures that regulates decision making ',
       
        title: 'Legislative framework',
       
      },
      {
       
        description: " It the systematic promotion of OH in a way that overarching policies for environment , livestock, agriculture and public health  recognise the interlinkage of the OH sectors with respect to health, reinforce this through policy objectives and  actions across  government sectors, within sector departments and agencies in way that creates synergies towards achieving the defined OH objectives.",
        title: 'Policy Coherence',
        
      },
    
  ];

class Definition extends Component {
  state = definitions;

  render() {
    let { theme } = this.props;

    return (
      <Fragment>
  
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <h3>
All the information/definitions provided below are only specific for this tool usage</h3>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
        
            {this.state.map((p) => (
              <Grid
                item
                key={p.id}
                lg={4}
                md={6}
                xs={12}
              >
        <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
            <h4 className="text-muted m-0 py-6" >{p.title}</h4>
        <p className="text-muted m-0 py-6">
          {p.description}
        </p>
       
      </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
       
      </Container>
   
           
      </Fragment>
    );
  }
}

export default withStyles({}, { withTheme: true })(Definition);
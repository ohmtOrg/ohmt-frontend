import React, { useState, Fragment } from "react";
import { 
    Box,
    Card,
    Grid,
    Container,
    } from "@material-ui/core";

import { makeStyles,withStyles, } from "@material-ui/core/styles";
import Tooltip from '@material-ui/core/Tooltip';

const state= [
    {
      
      description: 'The One Health Monitoring Tool (OHMT) was developed to assist countries and organizations to institutionalize and operationalize One Health. It is a tool that is used to assess the progress of and to identify gaps in the implementation of OH at the local, national, and regional levels. The user collects semi-quantitative data, which is fed into a digital system that generates visuals, allowing for a comprehensive overview of operational gaps. The tool also serves as toolkit to facilitate users’ identification of existing OH tools, guidelines, initiatives, and other resources, thereby promoting multisectoral and multidisciplinary collaboration.',
      
      title: 'Purpose',
      
    },
    {

      description: 'The tool is composed of six specific components. <br/><ol> <li> User guidance</li> <li> Definition of key terms</li><li> Reference guide (Tool kit)</li> <li> Assessment of domains (Governance; Implementation and Performance)</li> <li> Result of the assessment</li> <li> Report of the assessment</li></ol><br/> <b>Component of Assessment of Domains is divided into:</b><br/><ul><li><b> 2 Domains:</b> A group of categories that relate to a broad sub-category of actions intended to improve One Health institutionalization and operationalization.</li>  <li> <b>6 Categories:</b>Areas of focus generated in relation to circumstances that form the backdrop for each of the given domain.</li>  <li><b>25 Sub-Categories:</b>  Specific areas which enable the self-assessment to evaluate achievements against specific attributes related to each category.</li> </ul>',
     
      title: "Structure of the tool" ,
     
    },
    {
      
      
      description: "The user(s) conducting the self-assessment assigns a score (1- 4) into the OHMT scoring grid to each of the 26 sub-categories. The scoring scale prompts specific question(s) related to each statement that need to be read and understood prior to the user selecting the appropriate score. The specific questions will appear as the user (s) hover the mouse over one of the score options. The user(s) should only select score from 4 to 2 if the answers to all related specific questions are yes. If the answers for all specific questions of the sub-category are no, then the user should select score 1. The scores are automatically calculated and visuals (spider web diagram, bar graphs etc.) depicting operational strengths and gaps for each domain are automatically generated. The generated outputs will guide proposed improvements and link to the OHMT toolkit.<br/><br/><b>Self-assessment scoring categories:</b>  <br/> <ol><li> No initiative is in place for implementing OH</li><li>Plans are in place to develop initiatives that will improve OH </li><li> OH implementation is ongoing, but initiatives/activities are not yet endorsed by relevant competent authorities</li><li>OH implementation is ongoing, and initiatives/activities are endorsed by relevant competent authorities </li></ol>",
      
      title: 'Scoring scale and criteria’s to be used',
      
    },
    
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
function Dashboard1()  {
  
  const classes = useStyles();
  
   

    return (
      <Fragment>
  
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3} mb={3}>
          <Grid
            container
            spacing={1}
          >
            {state.map((p) => (
              <Grid
                item
                key={p.id}
                lg={12}
                md={12}
                xs={12}
              >
        <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
            <h2 className="text-muted m-0 py-1" >{p.title}</h2>
        <p className="text-muted text-align-left m-0 py-4" style={{ textAlign: "left" }} dangerouslySetInnerHTML={{__html: p.description}}/>
          
          {/* <p dangerouslySetInnerHTML={{__html: p.description}}/>
        </p> */}
       
      </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
       
      </Container>
   
           
      </Fragment>
    );
  
}

export default withStyles({}, { withTheme: true })(Dashboard1);
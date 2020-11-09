import React, { Component, Fragment } from "react";
import { 
    Box,
    Card,
    CardContent,
    Button,
    Divider,
    Grid,
    Typography,
    Container,
    } from "@material-ui/core";


import { withStyles } from "@material-ui/styles";
const guidance= [
    {
      
      description: 'This One Health Monitoring Tool (OHMT) is aiming of assessment progress made in OH implementation by identifying strenghtens, gaps at national, sub-regional and regional levels. This is also a repository tool of all exixting OH tools, which will be an entry point whic will be used advising for any users to identify which of the existing tools of OH ',
      
      title: 'Purpose',
      
    },
    {

      description: 'this tool  is composed of: 2 domaines, 6 categories and 26 sub-categories. Domains are  groups of categories that pertain to a broad sub-category of actions intended to improve one health. There are 2 domains (Governence and Implementation and Performance); the 2 domains address essential aspects or operationalizing One Health.  Categories  are areas of focus that will be generated relating to circumstances that form the backdrop for each of the given domain. Sub-Categories are  Specific areas which enable the self-assessment to evaluate achievements against specific attributes directly related to each category.',
     
      title: "Tool's composition" ,
     
    },
    {
      
      
      description: "The individual (s) conducting the self-assessment assigns a score (1-4) into the OHMT scoring grid , by assigning a score (1-4) to each of the 26 sub-categories.scoring 1 means No initiative is in place for implementing OH, 2 means Plans are in place to develop initiatives that will improve OH, 3 means OH implementation is ongoing but initiatives/activities are not yet endorsed by relevant competent authorities and 4 means OH implemtation is ongoing and initiatives/activities are endorsed by relevant competent authorities. Based on the scores entered into the OHMT scoring grid, graphs highlighting the institutionalization and operationalization system’s strengths and weaknesses are automatically generated. These outputs become the basis from which guidance for improvement are proposed.",
      
      title: 'Scoring  ',
      
    },
    
  ];

class Dashboard1 extends Component {
  state = guidance;

  render() {
    let { theme } = this.props;

    return (
      <Fragment>
  
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          <Grid
            container
            spacing={1}
          >
            {this.state.map((p) => (
              <Grid
                item
                key={p.id}
                lg={12}
                md={12}
                xs={12}
              >
        <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24">
            <h4 className="text-muted m-0 py-1" >{p.title}</h4>
        <p className="text-muted m-0 py-1">
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

export default withStyles({}, { withTheme: true })(Dashboard1);
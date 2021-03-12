import React, { Component, Fragment } from "react";
import { Grid, Card, Container, Box, Button } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import { withStyles } from "@material-ui/styles";

export const definitions = [
  {
    title: "Accredited program",
    example: "",
    description: "It is a program which has been approved by and rolled out within a university environment leading to a degree."
  },

  {
    title: "Action plan",
    example: "",

    description: "A document that lists what steps must be taken in order to achieve a specific goal. The purpose of an action plan is to clarify what resources are required to reach the goal, formulate a timeline for when specific tasks need to be completed and determine what resources are required"
  },
  {
    title: "Certification program",
    example: "",

    description: "An alternative to a degree program. Certificate programs are short-term training programs that often take less time to complete than a degree."
  },
  {
    title: "Emergency fund",
    example: "",

    description: "Financial resources set aside to cover unexpected events that can be stressful and costly."
  },
  {
    title: "Framework",
    example: "",

    description: "A real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful. A framework is generally more comprehensive than a protocol and more prescriptive than a structure."
  },
  {
    title: "Implementation",
    example: "",

    description: "The process of executing the steps of a plan that can be accomplished in sequence."
  },
  {
    title: "Legislative framework",
    example: "",

    description: "Policies, legislation (and by-laws), and governance structures that regulates decision making."
  },
  {
    title: "Performance",
    example: "",

    description: "Process that monitors and reports on a program&#39;s progress and accomplishments by using pre-selected measures."
  },
  {
    title: "Policy Coherence",
    example: "",

    description: "The systematic promotion of OH such that relevant policies recognize the interlinkage of different sectors with respect to health and is reinforced through policy objectives and actions both across and within sectors and agencies."
  },
  {
    title: "Strategic action plan",
    example: "",

    description: "It takes the purpose and goals outlined in an action plan and adds the details needed to turn thought into action."
  },
  {
    title: "Structure",
    example: "",

    description: "A system that outlines how certain activities are directed in order to achieve specific goals. These activities can include rules, roles, responsibilities and determines how information flows between different. A formal structure helps ensure mechanisms are functional, effective, and sustainable."
  },
  {
    description: "Governance",
    example: "",

    description: "The process of decision-making and the process by which decisions are implemented and enforced."
  },
  {
    title: "Interagency",
    example: "",

    description: "The process of multilateral and/or bilateral agencies joining and collaborating to achieve a set of defined goals or targets."
  },
  {
    title: "Mechanism",
    example: "",
    description: "A process or system that is used to produce a particular result."
  },
  {
    title: "Policy",
    example: "",

    description: "A deliberate system of principles to guide decisions and achieve rational outcomes. A policy is a statement of intent and is implemented as a procedure or protocol. Policies are generally adopted by a governance body within an organization."
  },
  {
    title: "Standard Operating Procedure",
    example: "",

    description: "A document which describes the regularly recurring operations to carry out the activities correctly and always in the same manner."
  },
  {
    title: "Strategy",
    example: "",

    description: "The result of setting goals, determining actions ways/means to achieve the goals, and mobilizing resources to execute the actions. A strategy describes how the ends (goals) will be achieved by the means (resources) and actions (activities)."
  },
  {
    title: "Training program",
    example: "",

    description: "A learning package consisting of a set of modules that helps employees learn specific knowledge or skills to improve performance in their current roles."
  },
  // {

  //   description: 'The process of decision-making and the process by which decisions are implemented and enforced',
  //   title: 'Governance',
  //   example:"Governance manual for functioning of the One Health platform"

  // },
  // {

  //   description: 'Any organization, institution, body or structure mandated to exercise any executive and administrative functions contemplated by the operative agreements (Policies, SOP’s, MOU’s etc.) ',

  //   title: 'Entity',
  //   example:"Ministry, Department,Zoonotic Disease Unit of Kenya,…"

  // },
  // {


  //   description: "A structure is a system that outlines how certain activities are directed in order to achieve specific goals. These activities can include rules, roles, responsibilities and determines how information flows between different. A formal structure helps ensure mechanisms are functional, effective, and sustainable.",

  //   title: 'Structure',
  //   example:"Ministry, Department,Zoonotic Disease Unit of Kenya,…"

  // },
  // {

  //     description: 'A real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful. A framework is generally more comprehensive than a protocol and more prescriptive than a structure.',
  //     title: 'Framework',
  //     example:"Technical guidelines for Integrate Disease Surveillance and Response in the African Region Conceptual framework of public health surveillance and action"

  //   },
  //   {

  //     description: 'A process or system that is used to produce a particular result ',

  //     title: 'Mechanism',
  //     example:""

  //   },
  //   {


  //     description: "A person or organization that has the legally delegated or invested authority, capacity, or power to perform a designated function. ",

  //     title: 'Competent authority',
  //     example:"Head of State, Prime Minister, Minister, Permanent Secratary Director of Disease Control, Director of Health,…."

  //   },
  //   {

  //     description: 'Process of carrying out an execution of a plan that can be accomplished in in sequence',
  //     title: 'Implementation',
  //     example:""

  //   },
  //   {

  //     description: "Process that monitors and reports on a program's progress and accomplishments by using pre-selected performance measures.",

  //     title: 'Performance',
  //    example:"Perfmormance indicator"
  //   },
  //   {


  //     description: "A document which describes the regularly recurring operations to carry out the activities correctly and always in the same manner.",

  //     title: 'Standar Operating Procedure',
  //     example:"SOPs for triage of suspected COVID-10 patients in healthcare settings"

  //   },
  //   {

  //     description: 'The process of multilateral and/or bilateral agencies joining and collaborating together to achieve a set of defined goals or tragets ',
  //     title: 'Interagency',
  //     example:""

  //   },
  //   {

  //     description: 'Financial resources set aside to cover unexpected events that can be stressful and costly ',

  //     title: 'Emergency fund',
  //     example:"Central Emergency Response Fund (CERF)"

  //   },
  //   {

  //     description: "Set of modules, learning package that helps employees learn specific knowledge or skills to improve performance in their current roles",
  //     title: 'Training program',
  //     example:"Short-term (Certificate) and long term (Master, PhD) "

  //   },




  //   {

  //     description: 'An alternative to a degree program. Certificate programs are short-term training programs that often take less time to complete than a degree. ',

  //     title: 'Certification program',
  //     example:"Lab training, ISAVET, FELTP,…"

  //   },
  //   {


  //     description: "It is a program which has been approved by  and roll out within university environment  leading to a degree",

  //     title: 'Acredited program ',
  //     example:"MD, DVM, BSc, Master, PhD,…"

  //   },
  //   {

  //     description: 'Strategy generally involves setting goals, determining actions ways/means to achieve the goals, and mobilizing resources to execute the actions. A strategy describes how the ends (goals) will be achieved by the means (resources) and actions (activities) ',
  //     title: 'Strategy',
  //     example:"One Health Strategy of cameroon"

  //   },
    // {

    //   description: "A document that lists what steps must be taken in order to achieve a specific goal. The purpose of an action plan is to clarify what resources are required to reach the goal, formulate a timeline for when specific tasks need to be completed and determine what resources are required.",

    //   title: 'Action plan',
    //   example:""

    // },
  //   {


  //     description: "It takes the purpose and goals you've outlined in an action plan and adds the details needed to turn thought into action",

  //     title: 'Strategic action plan',
  //     example:"One Health strategic plan of Uganda,Rwanda, kenya, Tanzania,..."

  //   },
  //   {

  //     description: 'A policy is a deliberate system of principles to guide decisions and achieve rational outcomes. A policy is a statement of intent and is implemented as a procedure or protocol. Policies are generally adopted by a governance body within an organization. ',
  //     title: 'Policy',
  //     example:"Environmental Sustainability Policy"
  //   },
  //   {

  //     description: 'Consists of policies, legislation (and by-laws), and governance structures that regulates decision making ',

  //     title: 'Legislative framework',
  //     example:"Advancing Emergency Preparedness Through One Health Act of 2019"

  //   },
  //   {

  //     description: " It the systematic promotion of OH in a way that overarching policies for environment , livestock, agriculture and public health  recognise the interlinkage of the OH sectors with respect to health, reinforce this through policy objectives and  actions across  government sectors, within sector departments and agencies in way that creates synergies towards achieving the defined OH objectives.",
  //     title: 'Policy Coherence',
  //     example:""

  //   },

];

class Definition extends Component {
  // state = definitions;
  state = definitions.sort(function (a, b) {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  })

  render() {


    return (
      <Fragment>

        <Container maxWidth={false}>
          {/* <Toolbar /> */}
          <h3>
            The definitions are specific for the use of the OH Monitoring tool</h3>
          <Box mt={1}>
            <Grid
              container
              spacing={1}
            >

              {this.state.map((p) => (
                <Grid
                  item
                  key={p.id}
                  lg={6}
                  md={4}
                  xs={12}
                >
                  <Card elevation={0} className="upgrade-card bg-light-primary p-sm-24 fixed">
                    <h4 className="text-unmuted m-0 py-2" >{p.title}</h4>
                    <p className="text-muted m-0 py-2" style={{ textAlign: "left" }}>
                      {p.description}
                    </p>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        color="primary"
                      >
                        <Typography >Example</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography>
                          {p.example}
                        </Typography>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>


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
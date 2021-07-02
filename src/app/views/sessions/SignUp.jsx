import React, { Component } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  TextField,
  CircularProgress
} from "@material-ui/core";
import PropTypes from "prop-types";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { SignupAction } from "../../redux/actions/SignupActions";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import history from "history.js";
import { ToastContainer, toast } from 'react-toastify';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import  {Dataset} from'data.js'
import {countriesjson}  from './data'

const path = 'https://datahub.io/JohnSnowLabs/country-and-continent-codes-list/datapackage.json'


const getCountries = async ()=>{
// We're using self-invoking function here as we want to use async-await syntax:

  return   await Dataset.load(path)
 
}
const suggestions = countriesjson.filter(item => item.Continent_Name ==="Africa");
let absolute = countriesjson.filter(function(item){
  return item.Continent_Name ==="Africa";
});

const suggestionss = [
  {label: "Afghanistan", "code": "AF"},
{label: "Åland Islands", "code": "AX"},
{label: "Albania", "code": "AL"},
{label: "Algeria", "code": "DZ"},
{label: "American Samoa", "code": "AS"},
{label: "AndorrA", "code": "AD"},
{label: "Angola", "code": "AO"},
{label: "Anguilla", "code": "AI"},
{label: "Antarctica", "code": "AQ"},
{label: "Antigua and Barbuda", "code": "AG"},
{label: "Argentina", "code": "AR"},
{label: "Armenia", "code": "AM"},
{label: "Aruba", "code": "AW"},
{label: "Australia", "code": "AU"},
{label: "Austria", "code": "AT"},
{label: "Azerbaijan", "code": "AZ"},
{label: "Bahamas", "code": "BS"},
{label: "Bahrain", "code": "BH"},
{label: "Bangladesh", "code": "BD"},
{label: "Barbados", "code": "BB"},
{label: "Belarus", "code": "BY"},
{label: "Belgium", "code": "BE"},
{label: "Belize", "code": "BZ"},
{label: "Benin", "code": "BJ"},
{label: "Bermuda", "code": "BM"},
{label: "Bhutan", "code": "BT"},
{label: "Bolivia", "code": "BO"},
{label: "Bosnia and Herzegovina", "code": "BA"},
{label: "Botswana", "code": "BW"},
{label: "Bouvet Island", "code": "BV"},
{label: "Brazil", "code": "BR"},
{label: "British Indian Ocean Territory", "code": "IO"},
{label: "Brunei Darussalam", "code": "BN"},
{label: "Bulgaria", "code": "BG"},
{label: "Burkina Faso", "code": "BF"},
{label: "Burundi", "code": "BI"},
{label: "Cambodia", "code": "KH"},
{label: "Cameroon", "code": "CM"},
{label: "Canada", "code": "CA"},
{label: "Cape Verde", "code": "CV"},
{label: "Cayman Islands", "code": "KY"},
{label: "Central African Republic", "code": "CF"},
{label: "Chad", "code": "TD"},
{label: "Chile", "code": "CL"},
{label: "China", "code": "CN"},
{label: "Christmas Island", "code": "CX"},
{label: "Cocos (Keeling) Islands", "code": "CC"},
{label: "Colombia", "code": "CO"},
{label: "Comoros", "code": "KM"},
{label: "Congo", "code": "CG"},
{label: "Congo, The Democratic Republic of the", "code": "CD"},
{label: "Cook Islands", "code": "CK"},
{label: "Costa Rica", "code": "CR"},
{label: "Cote D'Ivoire", "code": "CI"},
{label: "Croatia", "code": "HR"},
{label: "Cuba", "code": "CU"},
{label: "Cyprus", "code": "CY"},
{label: "Czech Republic", "code": "CZ"},
{label: "Denmark", "code": "DK"},
{label: "Djibouti", "code": "DJ"},
{label: "Dominica", "code": "DM"},
{label: "Dominican Republic", "code": "DO"},
{label: "Ecuador", "code": "EC"},
{label: "Egypt", "code": "EG"},
{label: "El Salvador", "code": "SV"},
{label: "Equatorial Guinea", "code": "GQ"},
{label: "Eritrea", "code": "ER"},
{label: "Estonia", "code": "EE"},
{label: "Ethiopia", "code": "ET"},
{label: "Falkland Islands (Malvinas)", "code": "FK"},
{label: "Faroe Islands", "code": "FO"},
{label: "Fiji", "code": "FJ"},
{label: "Finland", "code": "FI"},
{label: "France", "code": "FR"},
{label: "French Guiana", "code": "GF"},
{label: "French Polynesia", "code": "PF"},
{label: "French Southern Territories", "code": "TF"},
{label: "Gabon", "code": "GA"},
{label: "Gambia", "code": "GM"},
{label: "Georgia", "code": "GE"},
{label: "Germany", "code": "DE"},
{label: "Ghana", "code": "GH"},
{label: "Gibraltar", "code": "GI"},
{label: "Greece", "code": "GR"},
{label: "Greenland", "code": "GL"},
{label: "Grenada", "code": "GD"},
{label: "Guadeloupe", "code": "GP"},
{label: "Guam", "code": "GU"},
{label: "Guatemala", "code": "GT"},
{label: "Guernsey", "code": "GG"},
{label: "Guinea", "code": "GN"},
{label: "Guinea-Bissau", "code": "GW"},
{label: "Guyana", "code": "GY"},
{label: "Haiti", "code": "HT"},
{label: "Heard Island and Mcdonald Islands", "code": "HM"},
{label: "Holy See (Vatican City State)", "code": "VA"},
{label: "Honduras", "code": "HN"},
{label: "Hong Kong", "code": "HK"},
{label: "Hungary", "code": "HU"},
{label: "Iceland", "code": "IS"},
{label: "India", "code": "IN"},
{label: "Indonesia", "code": "ID"},
{label: "Iran, Islamic Republic Of", "code": "IR"},
{label: "Iraq", "code": "IQ"},
{label: "Ireland", "code": "IE"},
{label: "Isle of Man", "code": "IM"},
{label: "Israel", "code": "IL"},
{label: "Italy", "code": "IT"},
{label: "Jamaica", "code": "JM"},
{label: "Japan", "code": "JP"},
{label: "Jersey", "code": "JE"},
{label: "Jordan", "code": "JO"},
{label: "Kazakhstan", "code": "KZ"},
{label: "Kenya", "code": "KE"},
{label: "Kiribati", "code": "KI"},
{label: "Korea, Democratic People'S Republic of", "code": "KP"},
{label: "Korea, Republic of", "code": "KR"},
{label: "Kuwait", "code": "KW"},
{label: "Kyrgyzstan", "code": "KG"},
{label: "Lao People'S Democratic Republic", "code": "LA"},
{label: "Latvia", "code": "LV"},
{label: "Lebanon", "code": "LB"},
{label: "Lesotho", "code": "LS"},
{label: "Liberia", "code": "LR"},
{label: "Libyan Arab Jamahiriya", "code": "LY"},
{label: "Liechtenstein", "code": "LI"},
{label: "Lithuania", "code": "LT"},
{label: "Luxembourg", "code": "LU"},
{label: "Macao", "code": "MO"},
{label: "Macedonia, The Former Yugoslav Republic of", "code": "MK"},
{label: "Madagascar", "code": "MG"},
{label: "Malawi", "code": "MW"},
{label: "Malaysia", "code": "MY"},
{label: "Maldives", "code": "MV"},
{label: "Mali", "code": "ML"},
{label: "Malta", "code": "MT"},
{label: "Marshall Islands", "code": "MH"},
{label: "Martinique", "code": "MQ"},
{label: "Mauritania", "code": "MR"},
{label: "Mauritius", "code": "MU"},
{label: "Mayotte", "code": "YT"},
{label: "Mexico", "code": "MX"},
{label: "Micronesia, Federated States of", "code": "FM"},
{label: "Moldova, Republic of", "code": "MD"},
{label: "Monaco", "code": "MC"},
{label: "Mongolia", "code": "MN"},
{label: "Montserrat", "code": "MS"},
{label: "Morocco", "code": "MA"},
{label: "Mozambique", "code": "MZ"},
{label: "Myanmar", "code": "MM"},
{label: "Namibia", "code": "NA"},
{label: "Nauru", "code": "NR"},
{label: "Nepal", "code": "NP"},
{label: "Netherlands", "code": "NL"},
{label: "Netherlands Antilles", "code": "AN"},
{label: "New Caledonia", "code": "NC"},
{label: "New Zealand", "code": "NZ"},
{label: "Nicaragua", "code": "NI"},
{label: "Niger", "code": "NE"},
{label: "Nigeria", "code": "NG"},
{label: "Niue", "code": "NU"},
{label: "Norfolk Island", "code": "NF"},
{label: "Northern Mariana Islands", "code": "MP"},
{label: "Norway", "code": "NO"},
{label: "Oman", "code": "OM"},
{label: "Pakistan", "code": "PK"},
{label: "Palau", "code": "PW"},
{label: "Palestinian Territory, Occupied", "code": "PS"},
{label: "Panama", "code": "PA"},
{label: "Papua New Guinea", "code": "PG"},
{label: "Paraguay", "code": "PY"},
{label: "Peru", "code": "PE"},
{label: "Philippines", "code": "PH"},
{label: "Pitcairn", "code": "PN"},
{label: "Poland", "code": "PL"},
{label: "Portugal", "code": "PT"},
{label: "Puerto Rico", "code": "PR"},
{label: "Qatar", "code": "QA"},
{label: "Reunion", "code": "RE"},
{label: "Romania", "code": "RO"},
{label: "Russian Federation", "code": "RU"},
{label: "Rwanda", "code": "RW"},
{label: "Saint Helena", "code": "SH"},
{label: "Saint Kitts and Nevis", "code": "KN"},
{label: "Saint Lucia", "code": "LC"},
{label: "Saint Pierre and Miquelon", "code": "PM"},
{label: "Saint Vincent and the Grenadines", "code": "VC"},
{label: "Samoa", "code": "WS"},
{label: "San Marino", "code": "SM"},
{label: "Sao Tome and Principe", "code": "ST"},
{label: "Saudi Arabia", "code": "SA"},
{label: "Senegal", "code": "SN"},
{label: "Serbia and Montenegro", "code": "CS"},
{label: "Seychelles", "code": "SC"},
{label: "Sierra Leone", "code": "SL"},
{label: "Singapore", "code": "SG"},
{label: "Slovakia", "code": "SK"},
{label: "Slovenia", "code": "SI"},
{label: "Solomon Islands", "code": "SB"},
{label: "Somalia", "code": "SO"},
{label: "South Africa", "code": "ZA"},
{label: "South Georgia and the South Sandwich Islands", "code": "GS"},
{label: "Spain", "code": "ES"},
{label: "Sri Lanka", "code": "LK"},
{label: "Sudan", "code": "SD"},
{label: "Suriname", "code": "SR"},
{label: "Svalbard and Jan Mayen", "code": "SJ"},
{label: "Swaziland", "code": "SZ"},
{label: "Sweden", "code": "SE"},
{label: "Switzerland", "code": "CH"},
{label: "Syrian Arab Republic", "code": "SY"},
{label: "Taiwan, Province of China", "code": "TW"},
{label: "Tajikistan", "code": "TJ"},
{label: "Tanzania, United Republic of", "code": "TZ"},
{label: "Thailand", "code": "TH"},
{label: "Timor-Leste", "code": "TL"},
{label: "Togo", "code": "TG"},
{label: "Tokelau", "code": "TK"},
{label: "Tonga", "code": "TO"},
{label: "Trinidad and Tobago", "code": "TT"},
{label: "Tunisia", "code": "TN"},
{label: "Turkey", "code": "TR"},
{label: "Turkmenistan", "code": "TM"},
{label: "Turks and Caicos Islands", "code": "TC"},
{label: "Tuvalu", "code": "TV"},
{label: "Uganda", "code": "UG"},
{label: "Ukraine", "code": "UA"},
{label: "United Arab Emirates", "code": "AE"},
{label: "United Kingdom", "code": "GB"},
{label: "United States", "code": "US"},
{label: "United States Minor Outlying Islands", "code": "UM"},
{label: "Uruguay", "code": "UY"},
{label: "Uzbekistan", "code": "UZ"},
{label: "Vanuatu", "code": "VU"},
{label: "Venezuela", "code": "VE"},
{label: "Viet Nam", "code": "VN"},
{label: "Virgin Islands, British", "code": "VG"},
{label: "Virgin Islands, U.S.", "code": "VI"},
{label: "Wallis and Futuna", "code": "WF"},
{label: "Western Sahara", "code": "EH"},
{label: "Yemen", "code": "YE"},
{label: "Zambia", "code": "ZM"},
{label: "Zimbabwe", "code": "ZW"}

];
const styles = theme => ({
  wrapper: {
    position: "relative"
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});
const filter = createFilterOptions();
const filterOptions = (options, params) => {
  const filtered = filter(options, params);
  if (params.inputValue !== "") {
    filtered.push({
      inputValue: params.inputValue,
      label: `Add "${params.inputValue}"`
    });
  }
  return filtered;
};

class SignUp extends Component{

  state = {
    email: "",
    password: "",
    country: "",
    firstName:"",
    lastName:"",
    organisation:"",
    region:"",
  
  };

   handleChange = (event, newValue) => {
   
    if (newValue && newValue.inputValue) {
    
      this.setState({
        label: newValue.inputValue
      });
      this.GetRegion(event.target.value)
      return;
    }
    event.persist();
    
    this.setState({
      [event.target.name]: event.target.value
    });
    this.GetRegion(event.target.value)
  };

  GetRegion =() => {
    console.log("country",this.state)
    let obj = suggestions.find(o => o.Country_Name === this.state.country);

  this.setState({
      ['region']: obj
    });
  };

  filterOptions = (options, params) => {
    const filtered = filter(options, params);
    if (params.inputValue !== "") {
      filtered.push({
        inputValue: params.inputValue,
        label: `Add "${params.inputValue}"`
      });
    }
    return filtered;
  };
  // handleChange = event => {
  //   event.persist();
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  handleFormSubmit = event => {
    console.log(this.state)
    this.props.SignupAction({ ...this.state });
    // history.push({
    //   pathname: "/dashboard/guidance"
    // });
  };

 render() {
    let { firstName,lastName,country,region, email, password,organisation } = this.state;
    let { classes } = this.props;
    return (
      <div className="signup flex justify-center w-full h-full-screen">
        <div className="p-8">
          <Card className="signup-card position-relative y-center">
            <Grid container>
              <Grid item lg={5} md={5} sm={5} xs={12}>
                <div className="p-8 flex justify-center bg-light-gray items-center h-full">
                  <img
                    src="/assets/images/illustrations/posting_photo.svg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item lg={7} md={7} sm={7} xs={12}>
                <div className="p-9 h-full">
                  <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="First Name"
                      onChange={this.handleChange}
                      type="text"
                      name="firstName"
                      value={firstName}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                     <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Last Name"
                      onChange={this.handleChange}
                      type="text"
                      name="lastName"
                      value={lastName}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                     <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Organisation"
                      onChange={this.handleChange}
                      type="text"
                      name="organisation"
                      value={organisation}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <TextValidator
                      className="mb-6 w-full"
                      variant="outlined"
                      label="Email"
                      onChange={this.handleChange}
                      type="email"
                      name="email"
                      value={email}
                      validators={["required", "isEmail"]}
                      errorMessages={[
                        "this field is required",
                        "email is not valid"
                      ]}
                    />
                       
                    
                                <Autocomplete
        className="mb-4 w-full"
        options={suggestions}
        getOptionLabel={option => option.Country_Name}
        onChange={this.handleChange}
        renderInput={params => (
          <TextValidator
          className="mb-4 w-half"
                      {...params}
                      label="Country"
                      variant="outlined"
                      fullWidthvariant="outlined"
                      label="Country"
                      onChange={this.handleChange}
                      type="text"
                      name="country"
                      value={country}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
      
        )}
      />
      <TextValidator
                      className="mb-4 w-full"
                      label="Region"
                      variant="outlined"
                      // onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={region}
                      validators={["required"]}
                      // errorMessages={["this field is required"]}
                    />
      
                    <TextValidator
                      className="mb-4 w-full"
                      label="Password"
                      variant="outlined"
                      onChange={this.handleChange}
                      name="password"
                      type="password"
                      value={password}
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    />
                    <FormControlLabel
                      className="mb-4"
                      name="agreement"
                      onChange={this.handleChange}
                      control={<Checkbox />}
                      label="Do you have one health in your country."
                    />
              
                    <div className="flex items-center">
                      <Button
                        className="capitalize"
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        Sign up
                      </Button>
                      {this.props.Signup.loading && (
                          <CircularProgress
                            size={24}
                            className={classes.buttonProgress}
                          />
                        )}
                      {this.props.Signup.error_message&& (
                           <div>
                           <ToastContainer />
                         </div>
                        )}
                      <span className="mx-2 ml-5">or</span>
                      <Button
                        className="capitalize"
                        onClick={() =>
                          this.props.history.push("/session/signin")
                        }
                      >
                        Sign in
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </Grid>
            </Grid>
          </Card>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  // setUser: PropTypes.func.isRequired
  Signup: state.Signup,
  SignupAction: PropTypes.func.isRequired,
  
});
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { SignupAction })(SignUp))
);


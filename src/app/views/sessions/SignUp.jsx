import React, { Component } from "react";
import {
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Button,
  TextField
} from "@material-ui/core";
import PropTypes from "prop-types";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { SignupAction } from "../../redux/actions/SignupActions";
import { Autocomplete, createFilterOptions } from "@material-ui/lab";
import history from "history.js";

const suggestions = [
  { label: "Afghanistan" },
  { label: "Aland Islands" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "American Samoa" },
  { label: "Andorra" },
  { label: "Angola" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
  { label: "Aruba" },
  { label: "Australia" },
  { label: "Austria" },
  { label: "Azerbaijan" },
  { label: "Bahamas" },
  { label: "Bahrain" },
  { label: "Bangladesh" },
  { label: "Barbados" },
  { label: "Belarus" },
  { label: "Belgium" },
  { label: "Belize" },
  { label: "Benin" },
  { label: "Bermuda" },
  { label: "Bhutan" },
  { label: "Bolivia, Plurinational State of" },
  { label: "Bonaire, Sint Eustatius and Saba" },
  { label: "Bosnia and Herzegovina" },
  { label: "Botswana" },
  { label: "Bouvet Island" },
  { label: "Brazil" },
  { label: "British Indian Ocean Territory" },
  { label: "Brunei Darussalam" }
];

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
    lastName:""
  };

   handleChange = (event, newValue) => {
    if (newValue && newValue.inputValue) {
      this.setState({
        label: newValue.inputValue
      });
      return;
    }
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
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
    history.push({
      pathname: "/dashboard/guidance"
    });
  };

 render() {
    let { firstName,lastName,country, email, password } = this.state;
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
        getOptionLabel={option => option.label}
        renderInput={params => (
          <TextValidator
                      
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
                      label="I have read and agree to the terms of service."
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
  SignupAction: PropTypes.func.isRequired,
  
});

export default connect(mapStateToProps, {SignupAction})(SignUp);

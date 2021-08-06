import React, { Component } from "react";
import {
  Grid,
  Button,
  Typography,
  CircularProgress,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { connect } from "react-redux";
import { SignupAction } from "../../redux/actions/SignupActions";
import { Autocomplete } from "@material-ui/lab";
import { ToastContainer } from "react-toastify";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { countriesJson } from "./data";
import "./SignUp.scss";

const africanCountries = countriesJson.filter(
  (item) => item.Continent_Name === "Africa"
);

const styles = (theme) => ({
  wrapper: {
    position: "relative",
  },

  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

const map = document.getElementById("svgMap");

class SignUp extends Component {
  state = {
    formData: {
      firstName: {
        label: "First Name",
        type: "text",
        value: "",
        required: true,
      },
      lastName: {
        label: "Last Name",
        type: "text",
        value: "",
        required: true,
      },
      email: {
        label: "Email",
        type: "email",
        value: "",
        required: true,
      },
      password: {
        label: "Password",
        type: "password",
        value: "",
        required: true,
      },
      country: {
        label: "Country",
        type: "text",
        value: "",
        options: africanCountries,
        filterOption: "Country_Name",
        isAutoComplete: true,
        required: true,
      },
      region: {
        label: "Region",
        type: "text",
        value: "",
        required: true,
      },
      gender: {
        label: "Gender",
        type: "select",
        value: "",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
        filterOption: "label",
        isAutoComplete: true,
        required: true,
      },
      otherInfo: {
        label: "Other Information",
        type: "text",
        value: "",
        required: true,
      },
      sectors: {
        label: "Sectors",
        type: "select",
        value: "",
        options: [
          { label: "Animal Health", value: "animal" },
          { label: "Wild Health", value: "wild" },
        ],
        filterOption: "label",
        isAutoComplete: true,
        required: true,
      },
    },
    mode: "",
    onHealth: false,
  };

  handleChange = (e) => {
    const formData = { ...this.state.formData };
    formData[e.target.name].value = e.target.value;

    console.log(formData);
    this.setState({ formData });
  };

  handleSelect = (obj, i) => {
    const formData = { ...this.state.formData };

    formData[i].value = obj.value;
    this.setState({ formData });
  };

  changeMode = (newMode) => {
    this.setState({ mode: newMode });
  };

  changeCountry = (value) => {
    const formData = { ...this.state.formData };

    if (value && value.Country_Name) {
      formData["country"].value = value.Country_Name;
      formData["region"].value = value.region;
    } else {
      formData["country"].value = "";
      formData["region"].value = "";
    }

    this.setState({ formData });
  };

  handleFormSubmit = (event) => {
    // console.log(this.state);
    this.props.SignupAction({ ...this.state });
    // history.push({
    //   pathname: "/dashboard/guidance"
    // });
  };

  render() {
    let { mode, formData } = this.state;
    map.style.display = "none";

    let { classes } = this.props;

    const platform = ["One Health User", '"Other" User', "Dashboard User"];

    const inputElements = Object.keys(formData).map((i, index) => {
      let elementInput;
      const element = formData[i];
      let changeFunc = null;

      if (i === "country") {
        changeFunc = this.changeCountry;
      } else {
        changeFunc = this.handleSelect;
      }

      if (element.isAutoComplete) {
        elementInput = (
          <Autocomplete
            className="w-full"
            options={element.options}
            name={i}
            getOptionLabel={(option) => option[element.filterOption]}
            onChange={(e, newValue) => changeFunc(newValue, i)}
            renderInput={(params) => (
              <TextValidator
                className="w-full"
                {...params}
                label={element.label}
                type={element.type}
                value={element.value}
                validators={["required"]}
                errorMessages={["Country is required"]}
              />
            )}
          />
        );
      } else {
        elementInput = (
          <TextValidator
            className="w-full"
            label={element.label}
            onChange={this.handleChange}
            type={element.type}
            name={i}
            value={element.value}
            validators={element.isRequired && ["required"]}
            errorMessages={[`${element.label} is required`]}
          />
        );
      }

      return (
        <div className="col-md-6 col-sm-12 mb-2" key={index}>
          {elementInput}
        </div>
      );
    });

    const modeButtons = platform.map((key, index) => (
      <li key={index}>
        <button className="btn-select" onClick={() => this.changeMode(key)}>
          {key}
        </button>
      </li>
    ));

    let uiForm = null;

    if (!mode) {
      uiForm = (
        <div className="signUp-options">
          <h2 className="title">Register as:</h2>

          <ul className="list-unstyled">{modeButtons}</ul>
        </div>
      );
    } else {
      uiForm = (
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto my-5 signUp-form">
              <div className="signUp-form__img">
                <img
                  src="/assets/images/illustrations/posting_photo.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>

              <div className="p-8">
                <ValidatorForm ref="form" onSubmit={this.handleFormSubmit}>
                  <div className="row">{inputElements}</div>

                  <Box mt={4}>
                    <Button
                      className="capitalize"
                      variant="contained"
                      color="primary"
                      type="submit"
                      onClick={this.handleFormSubmit}
                    >
                      Sign up
                    </Button>
                    {this.props.Signup.loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                    {this.props.Signup.error_message && (
                      <div>
                        <ToastContainer />
                      </div>
                    )}
                    <span className="mx-2 ml-5">/</span>
                    <Button
                      className="capitalize"
                      onClick={() => this.props.history.push("/session/signin")}
                    >
                      Sign in
                    </Button>
                    <span className="mx-2 ml-5">/</span>
                    <Button
                      className="capitalize"
                      onClick={() => this.changeMode("")}
                    >
                      get Back
                    </Button>
                  </Box>
                </ValidatorForm>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return uiForm;
  }
}

const mapStateToProps = (state) => ({
  Signup: state.Signup,
});
export default withStyles(styles, { withTheme: true })(
  withRouter(connect(mapStateToProps, { SignupAction })(SignUp))
);

import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_LOADING,
  } from "../actions/SignupActions";
  
  const initialState = {
    success: false,
    loading: false,
    error_message:null,
    error: {
      username: null,
      password: null
    }
  };
  
  const SignupReducer = function(state = initialState, action) {
    console.log('is signup reducer ',action)
    switch (action.type) {
      case SIGNUP_LOADING: {
        return {
          ...state,
          loading: true
        };
      }
      case SIGNUP_SUCCESS: {
        return {
          ...state,
          success: true,
          loading: false
        };
      }
    
      case SIGNUP_ERROR: {
        return {
          success: false,
          loading: false,
          error: action.data,
          error_message: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default SignupReducer;
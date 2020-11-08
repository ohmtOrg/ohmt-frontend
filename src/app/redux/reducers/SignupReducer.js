import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_LOADING,
  } from "../actions/SignupActions";
  
  const initialState = {
    success: false,
    loading: false,
    error: {
      username: null,
      password: null
    }
  };
  
  const SignupReducer = function(state = initialState, action) {
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
          error: action.data
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default SignupReducer;
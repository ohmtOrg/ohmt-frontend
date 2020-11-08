import {
    RESET_PASSWORD_SUCESS,
    RESET_PASSWORD_LOADING,
    RESET_PASSWORD_ERROR,
    REQUEST_RESET_PASSWORD_ERROR,
    REQUEST_RESET_PASSWORD_LOADING,
    REQUEST_RESET_PASSWORD_SUCESS
  } from "../actions/UserActions";
  
  const initialState = {
    loading:false,
    success:false,
    requestreset:false,
    error:{},
    
  };
  
  const resetPasswordReducer = function(state = initialState, action) {
    switch (action.type) {
      case REQUEST_RESET_PASSWORD_LOADING: {
        return {
          ...state,
          loading:true
        };
      }
      case REQUEST_RESET_PASSWORD_ERROR: {
        return {
            ...state,
            loading: false,
            requestreset:false,
            error:action.data
        };
      }
      case RESET_PASSWORD_LOADING: {
        return {
          ...state,
          success:false,
          loading: true,
        };
      }
      case RESET_PASSWORD_ERROR: {
        return {
          ...state,
          loading: false,
          success:false,
          error:action.data
        };
      }
      case RESET_PASSWORD_SUCESS: {
        return {
          ...state,
          loading: false,
          success:true
        };
      }
      case REQUEST_RESET_PASSWORD_SUCESS: {
        return {
            ...state,
            requestreset:true,
            loading:false
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default resetPasswordReducer;
  
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
} from "../actions/LoginActions";

const initialState = {
  success: false,
  loading: false,
  error_message:null,
  error: {
    username: null,
    password: null
    
  }
};

const LoginReducer = function(state = initialState, action) {
  console.log("in login reducer",action,state.error_message)
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        success: true,
        loading: false
      };
    }
  
    case LOGIN_ERROR: {
      return {
        success: false,
        loading: false,
        error_message: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default LoginReducer;

import {
    SET_IMP,
    SET_GOV,
    SET_IMP_FEEDBACK,
    SET_GOV_FEEDBACK ,
  } from "../actions/PerformamceAction";
  import {goverd,implemData} from '../../views/Evaluation/data'
  
  const initialState = {
      impl:[...implemData],
      gov:[...goverd],
      govfeedback:'',
      impfeedback:''
  };
  
  const performanceReducer = function(state = initialState, action) {
    switch (action.type) {
      case SET_IMP: {
        return {
          ...state,
          imp:[...action.data]
        };
      }
      case SET_GOV_FEEDBACK: {
        return {
          ...state,
        govfeedback: action.data
        };
      }
         case SET_IMP_FEEDBACK: {
        return {
          ...state,
          impfeedback:action.data
        };
      }
      case SET_GOV: {
        return {
          ...state,
          gov:[...action.data]
        };
      }
      
      default: {
        return state;
      }
    }
  };
  
  export default performanceReducer;
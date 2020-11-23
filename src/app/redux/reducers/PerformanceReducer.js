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
      impfeedback:' '
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
        console.log('setting  gov feed redicer ', action.data)
        return {
          ...state,
        govfeedback: action.data
        };
      }
         case SET_IMP_FEEDBACK: {
          console.log('setting emp  feedback redicer ', action.data)
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
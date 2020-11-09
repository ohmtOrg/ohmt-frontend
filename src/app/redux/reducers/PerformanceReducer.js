import {
    SET_IMP,
    SET_GOV,
  } from "../actions/PerformamceAction";
  import {goverd,implemData} from '../../views/Evaluation/data'
  
  const initialState = {
      impl:[...implemData],
      gov:[...goverd],
  };
  
  const performanceReducer = function(state = initialState, action) {
    switch (action.type) {
      case SET_IMP: {
        return {
          ...state,
          imp:[...action.data]
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
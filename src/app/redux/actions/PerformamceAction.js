import history from "history.js";
export const SET_GOV = "SET_GOV";
export const SET_IMP = "SET_IMP";
export const ADD_PERFORMANCE_LOADING = "ADD_PERFORMANCE_LOADING";
export const ADD_PERFORMANCE_SUCCESS = "ADD_PERFORMANCE_SUCCESS";
export const ADD_PERFORMANCE_ERROR = "ADD_PERFORMANCE_ERROR";



export function AddGov(gov) {
  return dispatch => {
    history.push({
      pathname: "/evaluation/implementatiom"
    });
    console.log('here')
    dispatch({
      type: SET_GOV,
      data: gov
    });
   
  };
}

export function AddImp(imp) {
    return dispatch => {
      history.push({
        pathname: "/graphs"
      });
      dispatch({
        type: SET_GOV,
        data: imp
      });
     
    };
  }

import {
    ADD_REPORT_SUCCESS,
  
    ADD_REPORT_LOADING,
    ADD_REPORT_ERROR,
} from "../actions/PerformamceAction";
import {
  
    GET_REPORT_LOADING,
    GET_REPORT_ERROR,
    GET_REPORT_SUCCESS,
   
} from "../actions/ReportAction";
import { goverd, implemData } from '../../views/Evaluation/data'

const initialState = {
    reports:[],
    report: {},
    loading: false,
    error: null

};

const reportReducer = function (state = initialState, action) {
    console.log("in report reducers ", state)
    switch (action.type) {
        case GET_REPORT_SUCCESS: {
            return {
                ...state,
                loading: false,
                reports: action.payload,
            };
        }
       
        case GET_REPORT_ERROR: {
            return {
                ...state,
                loading: false,
                error:action.payload,
            };
        }
        case GET_REPORT_LOADING: {

            return {
                ...state,
                loading: true,
            };
        }
        case ADD_REPORT_SUCCESS: {

            return {
                ...state,
                loading: false,
                report: { ...action.data },
            };
        }
        case ADD_REPORT_ERROR: {
            return {
                ...state,
                loading: false,
                error:action.data,
            };
        }
        case ADD_REPORT_LOADING: {

            return {
                ...state,
                loading: true,
            };
        }

        default: {
            return state;
        }
    }
};

export default reportReducer;

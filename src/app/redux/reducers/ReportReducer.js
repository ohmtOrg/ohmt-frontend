import {
    ADD_REPORT_SUCCESS,
    ADD_REPORT_LOADING,
    ADD_REPORT_ERROR,
} from "../actions/PerformamceAction";
import { goverd, implemData } from '../../views/Evaluation/data'

const initialState = {
    report: {
        impl: [...implemData],
        gov: [...goverd],
    },
    loading: false,
    error: null

};

const reportReducer = function (state = initialState, action) {
    switch (action.type) {
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
import history from "history.js";
import { toast } from "react-toastify";

export const SET_GOV = "SET_GOV";
export const SET_IMP_FEEDBACK = "SET_IMP_FEEDBACK";
export const SET_GOV_FEEDBACK = "SET_GOV_FEEDBACK";
export const SET_IMP = "SET_IMP";
export const ADD_REPORT_LOADING = "ADD_REPORT_LOADING";
export const ADD_REPORT_SUCCESS = "ADD_REPORT_SUCCESS";
export const ADD_REPORT_ERROR = "ADD_REPORT_ERROR";

export function AddGov(gov) {
  return (dispatch) => {
    history.push({
      pathname: "/evaluation/implementatiom",
    });
    console.log("here");
    dispatch({
      type: SET_GOV,
      data: gov,
    });
  };
}

export function AddImpFeedback(feedback) {
  return (dispatch) => {
    dispatch({
      type: SET_IMP_FEEDBACK,
      data: feedback,
    });
  };
}
export function AddGovFeedback(feedback) {
  return (dispatch) => {
    dispatch({
      type: SET_GOV_FEEDBACK,
      data: feedback,
    });
  };
}

export function AddImp(imp) {
  return (dispatch) => {
    history.push({
      pathname: "/graphs",
    });
    dispatch({
      type: SET_IMP,
      data: imp,
    });
  };
}

export function AddReport(report) {
  return (dispatch) => {
    dispatch({
      type: ADD_REPORT_LOADING,
    });
    const token = localStorage.getItem("jwt_token");
    console.log(report);
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/report`, {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("jwt_token"),
        "content-type": "application/json",
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          console.log("sucessfully report submitted");
          toast.success("submitted sucessfully");
          history.push({
            pathname: "/dashboard/guidance",
          });

          return dispatch({
            type: ADD_REPORT_SUCCESS,
            payload: data.data.user,
          });
        } else {
          console.log("error while submitting", data.data);
          var B = data?.data?.message
            ? data?.data?.message
            : "report can not be submitted";
          // toast(B)
          toast.error(B);
          return dispatch({
            type: ADD_REPORT_ERROR,
            payload: B,
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: ADD_REPORT_ERROR,
          payload: error,
        });
      });
  };
}

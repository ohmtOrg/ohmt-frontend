import history from "history.js";
import { toast } from "react-toastify";

export const GET_REPORT_LOADING = "GET_REPORT_LOADING";
export const GET_REPORT_SUCCESS = "GET_REPORT_SUCCESS";
export const GET_REPORT_ERROR = "GET_REPORT_ERROR";

export function getReports() {
  return (dispatch) => {
    dispatch({
      type: GET_REPORT_LOADING,
    });

    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reports`, {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("jwt_token"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {

          return dispatch({
            type: GET_REPORT_SUCCESS,
            payload: data.data,
          });
        } else {
          var B = data?.data?.message
            ? data?.data?.message
            : "reports can not be fetched";
          // toast(B)
          return dispatch({
            type: GET_REPORT_ERROR,
            payload: B,
          });
        }
      })
      .catch((error) => {
        return dispatch({
          type: GET_REPORT_ERROR,
          payload: error,
        });
      });
  };
}

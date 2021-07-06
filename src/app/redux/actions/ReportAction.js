import history from "history.js";
import { toast } from 'react-toastify';

export const GET_REPORT_LOADING = "GET_REPORT_LOADING";
export const GET_REPORT_SUCCESS = "GET_REPORT_SUCCESS";
export const GET_REPORT_ERROR = "GET_REPORT_ERROR";








  
  export function GetReports() {
  
    return dispatch => {
      dispatch({
        type: GET_REPORT_LOADING
      });
      console.log("get reports called")
      const token = localStorage.getItem("jwt_token");

      return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/reports`, {
        method: 'GET',
        headers: {
          'authorization':localStorage.getItem("jwt_token"),
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
    
          if (data.status === 'success') {
    console.log("sucessfully reports fetched")
            toast.success("submitted report retrieved");
            // history.push({
            //   pathname: "/dashboard/analytics"
            // });
    console.log(data)
            return dispatch({
              type: GET_REPORT_SUCCESS,
              payload: data.data
            })
          } else {
            console.log('error while fetching report ', data.data)
            var B = (data?.data?.message) ? data?.data?.message : "reports can not be fetched";
            // toast(B)
            toast.error(B);
            return dispatch({
              type: GET_REPORT_ERROR,
              payload: B
            })
          }
        }
        ).catch(error => {
          return dispatch({
            type: GET_REPORT_ERROR,
            payload: error
          });
        });
    
  }
  }

import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import localStorageService from "../../services/localStorageService";
import { setUserData } from "./UserActions";
import history from "history.js";
import axios from "axios";


export const REQUEST_RESET_PASSWORD_SUCCESS = "REQUEST_RESET_PASSWORD_SUCCESS";
export const REQUEST_RESET_PASSWORD_ERROR = "REQUEST_RESET_PASSWORD_ERROR";
export const REQUEST_RESET_PASSWORD_LOADING = "REQUEST_RESET_PASSWORD_LOADING";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_LOADING = "RESET_PASSWORD_LOADING";

export function resetPassword(input) {
    return dispatch => {
      dispatch({
        type: RESET_PASSWORD_LOADING
      });
      fetch(`${process.env.BACKEND_URL}/api/${process.env.VERSION}/user/forget/password`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(input),
      })
      .then((res) => res.json())
      .then((data) => (data.status === 200
        ? (dispatch({
            type:RESET_PASSWORD_SUCCESS,
          }),
          localStorage.setItem("jwt_token", data.body.token),
          axios.defaults.headers.common["Authorization"] = "Bearer " + data.bodytoken,
          localStorageService.setItem("auth_user", data.body),
          dispatch(
            setUserData({
              ...data
            })))
        :( dispatch({
            type:RESET_PASSWORD_ERROR,
            payload: data.error
        }))))
      .catch((error) => dispatch({
          type:RESET_PASSWORD_ERROR,
          payload: error
      }));
  
  }}

export function requestResetPassword(input) {
  return dispatch => {
    dispatch({
      type: REQUEST_RESET_PASSWORD_LOADING
    });
   fetch(`${process.env.BACKEND_URL}/api/${process.env.VERSION}/user/forget/password`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    .then((res) => res.json())
    .then((data) => (data.status === 200
      ? dispatch({
          type:REQUEST_RESET_PASSWORD_SUCCESS,
        })
      : dispatch({
          type:REQUEST_RESET_PASSWORD_ERROR,
          payload: data.error
      })))
    .catch((error) => dispatch({
        type:REQUEST_RESET_PASSWORD_ERROR,
        payload: error
    }));

}   
  };
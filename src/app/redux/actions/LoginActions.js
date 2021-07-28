import { setUserData } from "./UserActions";
import history from "history.js";
import localStorageService from "../../services/localStorageService";
import { toast } from 'react-toastify';

export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_LOADING = "LOGIN_LOADING";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";
export const RESET_PASSWORD_LOADING = "RESET_PASSWORD_LOADING";


export function loginWithEmailAndPassword({ email, password }) {
  return dispatch => {
    dispatch({
      type: LOGIN_LOADING
    });

    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.status === 'success') {

          localStorage.setItem("jwt_token", data.data.token);

          // axios.defaults.headers.common["Authorization"] = "Bearer " + data.body.token;
          // console.log('after axios token ',data)
          localStorageService.setItem("auth_user", data.data.user);

          //  history.push({
          //     pathname: "/dashboard/guidance"
          //   });
          // console.log('here', data)
          dispatch(setUserData(data.data.user));

          history.push({
            pathname: "/dashboard/analytics"
          });

          return dispatch({
            type: LOGIN_SUCCESS,
            payload: data.data.user
          })
        } else {
          console.log('error', data)
          var B = (data?.data?.message) ? data?.data?.message : "incorrect username or password";
          // toast(B)
          toast.error(B);
          return dispatch({
            type: LOGIN_ERROR,
            payload: B
          })
        }
      }
      ).catch(error => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error
        });
      });
  };
}


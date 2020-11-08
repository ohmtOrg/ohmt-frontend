import { setUserData } from "./UserActions";
import history from "history.js";
import localStorageService from "../../services/localStorageService";
import axios from "axios";
import { toast } from 'react-toastify';

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_LOADING = "SIGNUP_LOADING";



export function SignupAction(input) {
    console.log(input)
  return dispatch => {
    dispatch({
      type: SIGNUP_LOADING
    });
    return fetch(`http://localhost:8000/api/v1/user/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    .then((res) => res.json())
    .then((data) =>{
        console.log(data)
if(data.status === 'success'){
  localStorage.setItem("jwt_token", data.body.token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + data.body.token;
  localStorageService.setItem("auth_user", data.body);
  dispatch(setUserData(data.body));
    history.push({
      pathname: "/"
    });
    console.log('here', data)
    return dispatch({
      type: SIGNUP_SUCCESS
    })
}else {
  toast.error(data.message);
 return  dispatch({
    type:SIGNUP_ERROR,
    payload: data.error
})
}
    } 
  ) .catch(error => {
    return dispatch({
      type: SIGNUP_ERROR,
      payload: error
    });
  });
};
}



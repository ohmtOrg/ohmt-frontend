import { setUserData } from "./UserActions";
import history from "history.js";
import localStorageService from "../../services/localStorageService";
import axios from "axios";
import { toast } from 'react-toastify';

export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_LOADING = "SIGNUP_LOADING";



export function SignupAction(input) {
  return dispatch => {
    dispatch({
      type: SIGNUP_LOADING
    });
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signup`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(input),
    })
    .then((res) => res.json())
    .then((data) =>{
        
if(data.status === 'success'){
 
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
      pathname: "/dashboard/guidance"
    });
    return dispatch({
      type: SIGNUP_SUCCESS,
      payload:  data.data.user
    })
}else {
  console.log('error', data)
  var B = (data?.data?.message) ? data?.data?.message:"Error while signing up";
  // toast(B)
  toast.error(B);
 return  dispatch({
    type:SIGNUP_ERROR,
    payload: B
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



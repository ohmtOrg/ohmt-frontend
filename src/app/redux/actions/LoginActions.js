import jwtAuthService from "../../services/userService";
import FirebaseAuthService from "../../services/firebase/firebaseAuthService";
import { setUserData } from "./UserActions";
import history from "history.js";
import localStorageService from "../../services/localStorageService";
import axios from "axios";
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
    return fetch(`http://localhost:8000/api/v1/user/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) =>{
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
      type: LOGIN_SUCCESS
    })
}else {
  toast.error(data.message);
 return  dispatch({
    type:LOGIN_ERROR,
    payload: data.error
})
}
    } 
  ) .catch(error => {
    return dispatch({
      type: LOGIN_ERROR,
      payload: error
    });
  });
};
}


export function firebaseLoginEmailPassword({ email, password }) {
  return dispatch => {
    FirebaseAuthService.signInWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          dispatch(
            setUserData({
              userId: "1",
              role: "ADMIN",
              displayName: "Watson Joyce",
              email: "watsonjoyce@gmail.com",
              photoURL: "/assets/images/face-7.jpg",
              age: 25,
              token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh",
              ...user
            })
          );

          history.push({
            pathname: "/"
          });

          return dispatch({
            type: LOGIN_SUCCESS
          });
        } else {
          return dispatch({
            type: LOGIN_ERROR,
            payload: "Login Failed"
          });
        }
      })
      .catch(error => {
        return dispatch({
          type: LOGIN_ERROR,
          payload: error
        });
      });
  };
}

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
    console.log(process.env.REACT_APP_BACKEND_URL)
    return fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/user/signin`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({email,password}),
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
      type: LOGIN_SUCCESS,
      payload:  data.data.user
    })
}else {
  console.log('error', data)
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
              displayName: "Jean Salvi",
              email: "watsonjoyce@gmail.com",
              photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2F%40salviosage%2Fabout&psig=AOvVaw3IweLmDm61BZBbjvuSE6TF&ust=1604932534940000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNDpoN-V8-wCFQAAAAAdAAAAABAD",
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

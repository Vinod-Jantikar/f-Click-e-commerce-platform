import { LOGIN_AUTH, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

export const loginLoading = () => ({
    type: LOGIN_LOADING,
  });
  
  export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload,
  });
  
  export const loginAuthenticated = (payload) => ({
    type: LOGIN_AUTH,
    payload,
  });
  
  export const loginError = () => ({
    type: LOGIN_ERROR,
  });
  
  export const getLogout = () => ({
    type: LOGOUT,
  });
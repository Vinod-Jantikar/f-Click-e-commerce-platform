import { API_URL } from "../../api";
import { USER_ADDRESS_ERROR, USER_ADDRESS_LOADING, USER_ADDRESS_SUCCESS } from "./actionTypes";

export const getAddressLoading = () => ({
    type: USER_ADDRESS_LOADING,
  });
  
  export const getAddressSuccess = (payload) => ({
    type: USER_ADDRESS_SUCCESS,
    payload,
  });
  
  export const getAddressError = () => ({
    type: USER_ADDRESS_ERROR,
  });
  
  export const getAddressData = (userId, token) => (dispatch) => {
    dispatch(getAddressLoading());
  
    fetch(`${API_URL}/user/address/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(getAddressSuccess(res));
      })
      .catch((error) => dispatch(getAddressError()));
  };
  
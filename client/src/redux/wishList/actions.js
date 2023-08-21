import { API_URL } from "../../api";
import { WISHLIST_PRODUCTS_ERROR, WISHLIST_PRODUCTS_LOADING, WISHLIST_PRODUCTS_SUCCESS } from "./actionTypes";

export const getWishlistProductsLoading = () => ({
    type: WISHLIST_PRODUCTS_LOADING,
  });
  
  export const getWishlistProductsSuccess = (payload) => ({
    type: WISHLIST_PRODUCTS_SUCCESS,
    payload,
  });
  
  export const getWishlistProductsError = () => ({
    type: WISHLIST_PRODUCTS_ERROR,
  });
  
  export const getWishlistProductsData = (userId, token) => (dispatch) => {
    dispatch(getWishlistProductsLoading());
  
    fetch(`${API_URL}/wishlist/items/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(getWishlistProductsSuccess(res));
      })
      .catch((error) => dispatch(getWishlistProductsError(error)));
  };
  
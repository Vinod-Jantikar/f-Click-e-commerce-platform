import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  PRODUCTS_SUCCESS,
} from "./actionTypes";
import { API_URL } from "../../api";

export const getProductsLoading = () => ({
  type: PRODUCTS_LOADING
});

export const getProductsSuccess = (payload) => ({
  type: PRODUCTS_SUCCESS, payload
});

export const getProductsError = () => ({
  type: PRODUCTS_ERROR
});

export const getProductsData = (page, size) => (dispatch) => {
  dispatch(getProductsLoading());
  fetch(`${API_URL}/products/women?page=${page}&size=${size}`)
    .then((res) => res.json())
    .then((res) => dispatch(getProductsSuccess(res)))
    .catch((error) => dispatch(getProductsError()));
};

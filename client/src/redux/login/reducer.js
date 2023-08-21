import {
  LOGIN_AUTH,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: "false",
  token: "",
  error: false,
  user: null,
  userId: "",
};

export const loginReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return { ...store, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...store,
        loading: false,
        isAuthenticated: "true",
        token: payload.token,
        user: { ...payload.user },
        userId: payload.userId,
      };
    case LOGIN_AUTH:
      return {
        ...store,
        loading: false,
        isAuthenticated: payload,
      };
    case LOGIN_ERROR:
      return {
        ...store,
        loading: false,
        error: true,
        isAuthenticated: "false",
      };
    case LOGOUT:
      return {
        ...store,
        loading: false,
        isAuthenticated: "false",
        token: "",
        error: false,
        user: null,
      };
    default:
      return store;
  }
};

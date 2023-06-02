import { createContext, useReducer } from "react";

const INITIAL_STATE = {};

const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      return { ...state, ...payload };
    case "LOGOUT_USER":
      return {};
    default:
      throw new Error(`No case type ${type} found in shopReducer.`);
  }
};

export const authContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  const LoginUser = (user) => {
    console.log(user)
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  };

  const LogoutUser = () => {};

  const value = {
    LoginUser,
    LogoutUser,
    userInfo: state
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

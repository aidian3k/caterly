import { createReducer } from "@reduxjs/toolkit";
import { loginAction, logoutAction } from "../actions/authActions";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state) => {
      state["isAuthenticated"] = true;
    })
    .addCase(logoutAction, () => {
      return initialState;
    });
});

export default authReducer;

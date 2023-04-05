import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
  },

  reducers: {
    signupSuccess(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        // user: action.payload,
      };
    },
    signupFailed(state, action) {
      return {
        ...state,
        isAuthenticated: false,
      };
    },
    loginSuccess(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    loginFailed(state, action) {
      return {
        ...state,
        isAuthenticated: false,
      };
    },
    logout(state, action) {
      localStorage.removeItem("loginToken");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    },
  },
});

export const {
  signupSuccess,
  signupFailed,
  loginSuccess,
  loginFailed,
  logout,
} = userSlice.actions;

export default userSlice.reducer;

export const signupUser = (data) => async (dispatch) => {
  try {
    const sendData = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await sendData.json();
    console.log("res", res);
    alert(res.response);
  } catch (err) {
    dispatch(signupFailed());
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    const sendData = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const res = await sendData.json();
    alert(res.response);
    localStorage.setItem("loginToken", res.token);
  } catch (err) {
    dispatch(loginFailed());
  }
};

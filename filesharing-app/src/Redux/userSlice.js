// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     isAuthenticated: false,
//     user: null,
//   },

//   reducers: {
//     signupSuccess(state, action) {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     },
//     signupFailed(state, action) {
//       return {
//         ...state,
//         isAuthenticated: false,
//       };
//     },
//     loginSuccess(state, action) {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.payload,
//       };
//     },
//     loginFailed(state, action) {
//       return {
//         ...state,
//         isAuthenticated: false,
//       };
//     },
//     logout(state, action) {
//       localStorage.removeItem("loginToken");
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };
//     },
//   },
// });

// export const {
//   signupSuccess,
//   signupFailed,
//   loginSuccess,
//   loginFailed,
//   logout,
// } = userSlice.actions;

// export default userSlice.reducer;

// // Signup And Login API
// export const signupUser = (data, toast) => async (dispatch) => {
//   try {
//     const sendData = await fetch("http://localhost:8080/user/signup", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     const res = await sendData.json();
//     // dispatch(loginSuccess());
//     return res;
//   } catch (err) {
//     console.log("catch is running ");
//     dispatch(signupFailed());
//   }
// };

// export const loginUser = (data) => async (dispatch) => {
//   try {
//     const sendData = await fetch("http://localhost:8080/user/login", {
//       method: "POST",
//       headers: { "content-type": "application/json" },
//       body: JSON.stringify(data),
//     });
//     const res = await sendData.json();
//     localStorage.setItem("loginToken", res.token);
//     return res;
//   } catch (err) {
//     dispatch(loginFailed());
//   }
// };


// // import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // export const signupUser = createAsyncThunk(
// //   "user/signup",
// //   async (data, thunkAPI) => {
// //     try {
// //       const sendData = await fetch("http://localhost:8080/user/signup", {
// //         method: "POST",
// //         headers: { "content-type": "application/json" },
// //         body: JSON.stringify(data),
// //       });
// //       const res = await sendData.json();
// //       return res;
// //     } catch (err) {
// //       return thunkAPI.rejectWithValue(err.message);
// //     }
// //   }
// // );

// // export const loginUser = createAsyncThunk(
// //   "user/login",
// //   async (data, thunkAPI) => {
// //     try {
// //       const sendData = await fetch("http://localhost:8080/user/login", {
// //         method: "POST",
// //         headers: { "content-type": "application/json" },
// //         body: JSON.stringify(data),
// //       });
// //       const res = await sendData.json();
// //       localStorage.setItem("loginToken", res.token);
// //       return res;
// //     } catch (err) {
// //       return thunkAPI.rejectWithValue(err.message);
// //     }
// //   }
// // );

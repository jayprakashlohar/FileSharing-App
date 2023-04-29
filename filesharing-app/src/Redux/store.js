const { configureStore } = require("@reduxjs/toolkit");

import filesSlice from "./filesSlice";
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: {
    files: filesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import { apiSlice } from "./apiSlice";

// export function makeStore() {
//   return configureStore({
//     reducer: {
//       auth: authSlice,
//       [apiSlice.reducerPath]: apiSlice.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(apiSlice.middleware),
//   });
// }
// export const store = makeStore();

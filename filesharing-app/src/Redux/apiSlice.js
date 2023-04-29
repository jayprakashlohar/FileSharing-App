import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  //Signup Endpoint
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (payload) => ({
        url: "user/signup",
        method: "POST",
        body: payload,
      }),
    }),
    //Login Endpoint
    login: builder.mutation({
      query: (payload) => ({
        url: "user/login",
        method: "POST",
        body: payload,
      }),
    }),
    //Get all posts Endpoint
    // allPosts: builder.query({
    //   query: () => "/post",
    // }),
  }),
});

export const { useSignupMutation, useLoginMutation } = apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { collection, getDocs, query } from 'firebase/firestore'; // Import Firebase Firestore methods



const token = 'a5abf7e1c956c65d2f3a65f71da4345c';




export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  tagTypes: ["auth"],

  endpoints: (builder) => ({
    getTrending: builder.query({
      query: (type) => ({
        url: `/trending/all/${type}?api_key=a5abf7e1c956c65d2f3a65f71da4345c`,
        method: "GET",
        // headers: { Authorization: `Bearer ${token}` },
      }),

      providesTags: ["auth"],
    }),
  }),
});

export const {useGetTrendingQuery} = AuthApi
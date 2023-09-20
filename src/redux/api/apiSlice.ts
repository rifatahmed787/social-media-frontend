import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "apis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://social-media-server-fawn.vercel.app/api/v1",

    prepareHeaders(headers, { getState }) {
      // Access the authentication token from the Redux store
      const authToken = (getState() as RootState).auth.accessToken;
      if (authToken) {
        headers.set("Authorization", `${authToken}`);
      }
      return headers;
    },
  }),
  tagTypes: ["media", "medias", "top_medias", "reviews", "cart", "blog"],

  endpoints: () => ({}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

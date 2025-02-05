import {
    configureStore,
    createSerializableStateInvariantMiddleware,
  } from "@reduxjs/toolkit";
  import animateSlice from "./animateSlice";
import { AuthApi } from "../api/AuthApi";
  
  const nonSerializableMiddleware = createSerializableStateInvariantMiddleware();
  
  export const store = configureStore({
    reducer: {
      // Add the generated reducer as a specific top-level slice
      [AuthApi.reducerPath]: AuthApi.reducer,
  
      animateSlice: animateSlice,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        AuthApi.middleware,
        nonSerializableMiddleware
      ),
  });
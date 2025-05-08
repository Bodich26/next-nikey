import { favoritesApi, cartApi } from "@/features";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(favoritesApi.middleware, cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { favoritesApi, cartApi } from "@/features";
import { searchSneakersApi } from "@/features/search/api/search-sneakers-api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [searchSneakersApi.reducerPath]: searchSneakersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      favoritesApi.middleware,
      cartApi.middleware,
      searchSneakersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

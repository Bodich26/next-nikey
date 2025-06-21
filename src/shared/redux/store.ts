import { cartApi } from "@/features/cart";
import { favoritesApi } from "@/features/favorites";
import { ordersApi } from "@/features/orders/api";
import { searchSneakersApi } from "@/features/search/api/search-sneakers-api";
import { sneakersFilterApi } from "@/features/sneakers-filter";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [searchSneakersApi.reducerPath]: searchSneakersApi.reducer,
    [sneakersFilterApi.reducerPath]: sneakersFilterApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      favoritesApi.middleware,
      cartApi.middleware,
      searchSneakersApi.middleware,
      sneakersFilterApi.middleware,
      ordersApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import cartReducer, { CartState } from "./reducers/cartReducer";

const storedCartState = localStorage.getItem("cartState");
const persistedCartState: CartState = storedCartState
  ? JSON.parse(storedCartState)
  : { cart: [] };

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: {
    auth: { isAuthenticated: false },
    cart: persistedCartState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

import CartItem from "../../interfaces/CartItem";
import { createReducer } from "@reduxjs/toolkit";
import {
  addItemToCartAction,
  editCartItemAction,
  removeCartItemAction,
} from "../actions/cartActions";

export interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItemToCartAction, (state, action) => {
      const newItem = action.payload;

      if (
        state["cart"].find((el) => el.id === newItem.id) ||
        newItem.quantity <= 0
      ) {
        return;
      }

      state["cart"].push(newItem);
    })
    .addCase(editCartItemAction, (state, action) => {
      const updatedCartInfo = action.payload;
      const cartItemIndex = state["cart"].findIndex(
        (el) => el.id === updatedCartInfo.id,
      );

      if (cartItemIndex === -1 || updatedCartInfo.quantity <= 0) {
        return;
      }

      state["cart"][cartItemIndex].quantity = updatedCartInfo.quantity;
    })
    .addCase(removeCartItemAction, (state, action) => {
      state["cart"] = state["cart"].filter((el) => el.id !== action.payload);
    });
});

export default cartReducer;

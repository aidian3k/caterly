import CartItem from "../../interfaces/CartItem";
import { createReducer } from "@reduxjs/toolkit";
import {
  addItemToCartAction,
  editCartItemAction,
  removeCartItemAction,
} from "../actions/cartActions";

interface CartState {
  cart: Map<number, CartItem>;
}

const initialState: CartState = {
  cart: new Map<number, CartItem>(),
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItemToCartAction, (state, action) => {
      const newItem = action.payload;

      if (state["cart"].has(newItem.id) || newItem.quantity <= 0) {
        return;
      }

      state["cart"].set(newItem.id, newItem);
    })
    .addCase(editCartItemAction, (state, action) => {
      const updatedCartInfo = action.payload;
      const cartItem = state["cart"].get(updatedCartInfo.id);

      if (!cartItem || updatedCartInfo.quantity <= 0) {
        return;
      }

      state["cart"].set(updatedCartInfo.id, {
        ...cartItem,
        quantity: updatedCartInfo.quantity,
      });
    })
    .addCase(removeCartItemAction, (state, action) => {
      if (!state["cart"].has(action.payload)) {
        return;
      }

      state["cart"].delete(action.payload);
    });
});

export default cartReducer;

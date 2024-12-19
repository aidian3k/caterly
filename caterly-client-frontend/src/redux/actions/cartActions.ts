import { createAction } from "@reduxjs/toolkit";
import CartItem from "../../interfaces/CartItem";
import CartEditItem from "../../interfaces/CartEditItem";

export const addItemToCartAction = createAction<CartItem>("ADD_CART_ITEM");
export const editCartItemAction = createAction<CartEditItem>("EDIT_CART_ITEM");
export const removeCartItemAction = createAction<number>("REMOVE_CART_ITEM");
export const clearCartAction = createAction("CLEAR_CART");

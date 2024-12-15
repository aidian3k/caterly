import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  editCartItemAction,
  removeCartItemAction,
} from "../redux/actions/cartActions";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import CartItemCard from "../components/cart/CartItemCard";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );
  const handleUpdate = (id: number, quantity: number): void => {
    dispatch(editCartItemAction({ id: id, quantity: quantity }));
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Twój koszyk</h1>
      <Button
        label="Dodaj posiłek od koszyka"
        onClick={() => navigate("/meals")}
      />
      {cart.length === 0 ? (
        <p>Twój koszyk jest pusty</p>
      ) : (
        <div className="flex flex-col gap-4 w-full mt-3">
          {cart.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onDelete={() => dispatch(removeCartItemAction(item.id))}
              onUpdate={handleUpdate}
            />
          ))}
          <p>
            <strong>Łączna cena: {totalPrice.toFixed(2)} PLN</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

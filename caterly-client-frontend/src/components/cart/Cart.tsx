import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { removeCartItemAction } from "../../redux/actions/cartActions";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useMemo(
    () =>
      Array.from(cart.values()).reduce(
        (total, item) => total + item.quantity * item.price,
        0,
      ),
    [cart],
  );

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Twój koszyk</h1>
      <Button
        label="Dodaj posiłek od koszyka"
        onClick={() => navigate("/meals")}
      />
      {cart.size === 0 ? (
        <p>Twój koszyk jest pusty</p>
      ) : (
        <div>
          <ul>
            {Array.from(cart.values()).map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.price} PLN ={" "}
                {item.quantity * item.price} PLN
                <button onClick={() => dispatch(removeCartItemAction(item.id))}>
                  Usuń
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Łączna cena: {totalPrice} PLN</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

import React, { useEffect, useState } from "react";
import { CartItem, getCart, removeItemFromCart } from "./CartApi";

const Cart = () => {
  const [displayedCart, setDisplayedCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedCart = getCart();
    setDisplayedCart(storedCart);
    setLoading(false);
  }, []);

  const calculateTotalPrice = (): number => {
    return displayedCart.reduce(
      (total, item) => total + item.quantity * item.price,
      0,
    );
  };

  if (loading) {
    return <div>Ładowanie koszyka...</div>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Twój koszyk</h1>
      {displayedCart.length === 0 ? (
        <p>Twój koszyk jest pusty</p>
      ) : (
        <div>
          <ul>
            {displayedCart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x {item.price} PLN ={" "}
                {item.quantity * item.price} PLN
                <button
                  onClick={() => {
                    removeItemFromCart(item.id);
                    const storedCart = getCart();
                    setDisplayedCart(storedCart);
                  }}
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>
          <p>
            <strong>Łączna cena: {calculateTotalPrice()} PLN</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;

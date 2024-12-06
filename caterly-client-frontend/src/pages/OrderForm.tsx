import { useReducer, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import OrderService from "../services/OrderService";

import "../index.css";

interface Order {
  street: string;
  city: string;
  state: string;
  zip: string;
  house_number: string;
  apartament_number: string;
  payment_method: string;
}

const orderReducer = (
  state1: Order,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case "street":
      return { ...state1, street: action.payload };
    case "city":
      return { ...state1, city: action.payload };
    case "state":
      return { ...state1, state: action.payload };
    case "house-number":
      return { ...state1, house_number: action.payload };
    case "apartament-number":
      return { ...state1, apartament_number: action.payload };
    case "zip":
      return { ...state1, zip: action.payload };
    case "payment-method":
      return { ...state1, payment_method: action.payload };
    default:
      return state1;
  }
};

export default function OrderForm() {
  const [errorMsg, setErrorMsg] = useState("");
  const [order, orderDispatch] = useReducer(orderReducer, {
    street: "",
    city: "",
    state: "",
    house_number: "",
    apartament_number: "",
    zip: "",
    payment_method: "card",
  });
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );

  const OnChange = function OnChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    orderDispatch({ type: e.target.name, payload: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    OrderService.placeOrder(
      1,
      order.apartament_number,
      order.city,
      order.house_number,
      order.payment_method,
      order.state,
      order.street,
      order.zip,
      totalPrice,
    ).catch((error) => {
      setErrorMsg(error.message);
    });
    e.preventDefault();
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl mb-3">Order Form</h2>
        <form onSubmit={onSubmit}>
          {errorMsg !== "" && <p>{errorMsg}</p>}
          <div>
            <label htmlFor="street">Ulica:</label>
            <input
              className="input"
              type="text"
              id="street"
              name="street"
              required
              onChange={OnChange}
            />
          </div>
          <div>
            <label htmlFor="state">Województwo:</label>
            <input
              type="text"
              id="state"
              name="state"
              required
              onChange={OnChange}
            />
          </div>
          <div>
            <label htmlFor="city">Miasto:</label>
            <input
              type="text"
              id="city"
              name="city"
              required
              onChange={OnChange}
            />
          </div>
          <div>
            <label htmlFor="house-number">Numer domu:</label>
            <input
              type="text"
              id="house-number"
              name="house-number"
              required
              onChange={OnChange}
            />
          </div>
          <div>
            <label htmlFor="apartament-number">Numer mieszkania</label>
            <input
              type="text"
              id="apartament-number"
              name="apartament-number"
              onChange={OnChange}
            />
          </div>
          <div>
            <label htmlFor="zip">Kod pocztoy:</label>
            <input type="text" id="zip" name="zip" onChange={OnChange} />
          </div>

          <div>
            <label htmlFor="payment-method">Metoda płatności:</label>
            <select
              name="payment-method"
              id="payment-method"
              onChange={OnChange}
            >
              <option value="card">Karta</option>
              <option value="cash">Gotówka (przy odbiorze)</option>
              <option value="transfer">Przelew</option>
            </select>
          </div>
          <button
            className="p-2 text-gray-200 transition-colors rounded-md bg-blue-600 hover:bg-blue-500"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

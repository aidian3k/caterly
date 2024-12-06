import { useReducer } from "react";

interface Order {
  street: string;
  city: string;
  state: string;
  zip: string;
}

const orderReducer = (
  state: Order,
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case "street":
      return { ...state, street: action.payload };
    case "city":
      return { ...state, city: action.payload };
    case "house-number":
      return { ...state, house_number: action.payload };
    case "apartament_number":
      return { ...state, apartament_number: action.payload };
    case "zip":
      return { ...state, zip: action.payload };
    case "payment-method":
      return { ...state, payment_method: action.payload };
    default:
      return state;
  }
};

export default function OrderForm() {
  const [order, orderDispatch] = useReducer(orderReducer, {
    street: "",
    city: "",
    state: "",
    house_number: "",
    apartament_number: "",
    zip: "",
    payment_method: "",
  });

  const OnChange = function OnChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    orderDispatch({ type: e.target.name, payload: e.target.value });
    console.log(order);
  };

  return (
    <>
      <div>
        <h2>Order Form</h2>
        <form>
          <div>
            <label htmlFor="street">Ulica:</label>
            <input
              type="text"
              id="street"
              name="street"
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
              <option value="cash">Gotówka (przy odbiorze)</option>
              <option value="card">Karta</option>
              <option value="transfer">Przelew</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

import React, { useMemo } from "react";
import Button from "../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import SubmitOrder from "../interfaces/SubmitOrder";
import { clearCartAction } from "../redux/actions/cartActions";

const Summary = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart],
  );
  const submitOrder = useMutation({
    mutationFn: async () => {
      const submitOrderDto: SubmitOrder = {
        meals: cart.map((el) => ({
          mealId: el.id,
          quantity: el.quantity,
        })),
      };

      await apiClient.post("/orders", submitOrderDto);
    },
    onSuccess: () => {
      dispatch(clearCartAction());
      navigate("/orderHistory");
    },
    onError: (err) => {
      console.log("Wystąpił błąd przy składaniu zamówienia.");
      console.log(err);
    },
  });

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Podsumowanie</h1>
      <div>
        <table
          style={{
            width: "75%",
            borderCollapse: "separate",
            borderSpacing: "0 10px",
          }}
        >
          <thead>
            <tr>
              <th style={{ width: "50%", textAlign: "left" }}>Nazwa</th>
              <th style={{ textAlign: "left" }}>Ilość</th>
              <th style={{ textAlign: "right" }}>Cena</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td style={{ textAlign: "right" }}>
                  {item.price * item.quantity} PLN
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                colSpan={3}
                style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}
              ></td>
            </tr>
          </tfoot>
        </table>
        <div>
          <table
            style={{
              width: "75%",
              marginTop: "20px",
              fontSize: "x-large",
              textAlign: "right",
              borderCollapse: "collapse",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <strong>Zamówienie</strong>
                </td>
                <td>{totalPrice} PLN</td>
              </tr>
              <tr>
                <td>
                  <strong>Skarbonka</strong>
                </td>
                <td>- 0.0 PLN</td>
              </tr>
              <tr>
                <td>
                  <strong>Suma</strong>
                </td>
                <td>{totalPrice} PLN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Button label="Złóż zamowienie" onClick={() => submitOrder.mutate()} />
        <Button label="Powrót" onClick={() => navigate("/cart")} />
      </div>
    </div>
  );
};

export default Summary;

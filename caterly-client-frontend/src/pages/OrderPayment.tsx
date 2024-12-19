import { useNavigate, useParams } from "react-router-dom";
import PayOrder from "../interfaces/PayOrder";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import React from "react";

export default function OrderPayment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const payOrder = useMutation({
    mutationFn: async (data: PayOrder) => {
      await apiClient.put(`/orders/${id}/place`, data);
    },
    onSuccess: () => {
      navigate("/orderHistory");
    },
    onError: (err) => {
      console.log("Wystąpił błąd przy opłacaniu zamówienia.");
      console.log(err);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const paymentData: PayOrder = {
      paymentMethod: formData.get("paymentMethod") as string,
      address: formData.get("address") as string,
    };

    payOrder.mutate(paymentData);
  };

  return (
    <div>
      <h1 className="font-semibold text-2xl">Opłać zamówienie {id}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address">Adres</label>
        <input
          name="address"
          type="text"
          className="block mt-1 px-4 py-2 mb-3 border-gray-300 border rounded w-80"
          required
        />
        <label htmlFor="paymentMethod">Metoda płatności</label>
        <select
          name="paymentMethod"
          className="block w-80 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-sm leading-tight text-gray-700 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        >
          <option value="paypal">PayPal</option>
          <option value="blik">BLIK</option>
          <option value="transfer">Przelew elektroniczny</option>
        </select>
        <button
          type="submit"
          className="py-2 px-4 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ease-in-out duration-200"
        >
          Opłać
        </button>
      </form>
    </div>
  );
}

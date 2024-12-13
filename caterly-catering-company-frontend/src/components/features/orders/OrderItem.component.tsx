import React from "react";
import { CateringOrderDTO } from "../../../interfaces/order/CateringOrderDTO";

interface OrderItemProps {
  order: CateringOrderDTO;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {

  return (
    <div className="flex flex-row items-center justify-between w-full bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
      <h2 className="text-xl font-semibold text-gray-800">
        {order.id}
      </h2>
      <p className="text-lg text-gray-600">{order.dateOfPurchase.toDateString()} </p>
      <p className="text-lg text-gray-600">{order.state} </p>
      <div className="flex flex-col gap-2">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Wyświetl szczegóły zamówienia
        </button>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Zmień status zamówienia  
        </button>
      </div>
    </div>
  );
};

export default OrderItem;

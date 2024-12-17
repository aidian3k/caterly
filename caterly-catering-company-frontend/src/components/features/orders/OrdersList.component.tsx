import React from "react";
import { CateringOrderDTO } from "../../../interfaces/order/CateringOrderDTO";
import OrderItem from "./OrderItem.component";
import { useNavigate } from "react-router-dom";

interface OrderListProps {
  orders: CateringOrderDTO[];
}

const OrdersList: React.FC<OrderListProps> = ({ orders }) => {

  return (
    <div className="p-10">
      <div className="flex flex-row items-center justify-between w-full p-10 border-b-2 border-black-500">
        <p className="text-lg text-gray-600"> Numer zamówienia </p>
        <p className="text-lg text-gray-600"> Data </p>
        <p className="text-lg text-gray-600"> Status </p>
        <p className="text-lg text-gray-600"> Opcje </p>
      </div>
      {orders.map((order) => (
        <div className="gap-6 p-4">
          <OrderItem
            key={order.id}
            order={order}
          />
        </div> 
      ))}
    </div>
  );
};

export default OrdersList;

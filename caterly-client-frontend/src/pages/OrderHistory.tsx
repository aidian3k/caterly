import useGetOrderHistory from "../queries/orderHistory.query";
import { useState } from "react";
import ReviewForm from "../components/review-form/ReviewForm";
import { translateOrderState } from "../utils/OrderStateTranslationMapper";
import { OrderState } from "../interfaces/Order";

export default function OrderHistoryPage() {
  const { data: orders, error, isError } = useGetOrderHistory();
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  const handleAddReview = (orderId: number) => {
    setSelectedOrderId(orderId);
  };

  const handleCloseReview = () => {
    setSelectedOrderId(null);
  };

  if (isError) {
    console.log(error);
  }

  return (
    <div className="container mx-auto px-4 py-6 flex gap-6">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Historia zamówień</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Adres</th>
                <th className="py-2 px-4 border-b">Data zamówienia</th>
                <th className="py-2 px-4 border-b">Status zamówienia</th>
                <th className="py-2 px-4 border-b">Akcje</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-2 px-4 border-b text-center">
                      {order.id}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {order.address ?? "-"}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {new Date(order.dateOfPurchase).toLocaleDateString()}
                    </td>
                    <td
                      className={`py-2 px-4 border-b text-center ${
                        order.state === OrderState.SHIPPED
                          ? "text-green-500"
                          : order.state === OrderState.PAID
                            ? "text-blue-500"
                            : "text-gray-500"
                      }`}
                    >
                      {translateOrderState(order.state)}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {order.state === OrderState.SHIPPED && (
                        <button
                          className="text-blue-500 underline"
                          onClick={() => handleAddReview(order.id)}
                        >
                          Dodaj opinię
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedOrderId && (
        <div className="w-1/3">
          <ReviewForm orderId={selectedOrderId} onCancel={handleCloseReview} />
        </div>
      )}
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import useGetOrderHistory from "../queries/orderHistory.query";
import { OrderState } from "../interfaces/Order";

export default function OrderHistoryPage() {
  const { data: orders, error, isError, isPending } = useGetOrderHistory();
  const navigate = useNavigate();

  if (isError) {
    console.log(error);
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      {/*{error && <div className="text-red-500 mb-4">{error}</div>}*/}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Date of Purchase</th>
              <th className="py-2 px-4 border-b">Order State</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-2 px-4 border-b text-center">{order.id}</td>
                  <td className="py-2 px-4 border-b">{order.name}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {new Date(order.dateOfPurchase).toLocaleDateString()}
                  </td>
                  <td
                    className={`py-2 px-4 border-b text-center ${
                      order.orderState === OrderState.FINISHED
                        ? "text-green-500"
                        : order.orderState === OrderState.SHIPPED
                          ? "text-blue-500"
                          : "text-gray-500"
                    }`}
                  >
                    {order.orderState}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

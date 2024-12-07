import { useParams } from "react-router-dom";
import useOrder from "../queries/order.query";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const { orderid } = useParams<{ orderid: string }>();
  const { data: order, error, isError, isPending } = useOrder(Number(orderid));
  const navigate = useNavigate();

  if (isError) {
    console.error(error);
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Szczegóły zamówienia
      </h2>

      {isPending && <p className="text-center text-gray-500">Ładowanie...</p>}
      {isError && <p className="text-center text-red-500">Wystąpił błąd!</p>}

      {order && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Zamówienie (numer {order.id})
            </h3>

            <div className="text-gray-600">
              <p>
                <strong className="font-semibold">Nazwa:</strong> {order.name}
              </p>
              <p>
                <strong className="font-semibold">Data zakupu:</strong>{" "}
                {order.dateOfPurchase}
              </p>
              <p>
                <strong className="font-semibold">Adres:</strong>{" "}
                {order.address}
              </p>
              <p>
                <strong className="font-semibold">Liczba sztuk:</strong>{" "}
                {order.count}
              </p>
              <p>
                <strong className="font-semibold">Łączna cena:</strong>{" "}
                {order.totalPrice} PLN
              </p>
              <p>
                <strong className="font-semibold">Stan:</strong> {order.state}
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/orders")}
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
              Wróć do listy zamówień
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

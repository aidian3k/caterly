import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMeals from "../queries/meals.query";
import MealDto from "../interfaces/MealDto";
import useGetOrderHistory from "../queries/orderHistory.query";
import { OrderDTO } from "../interfaces/Order";

export default function OrderPage() {
  const { orderid } = useParams<{ orderid: string }>();

  //   const { //odkomentować jak endpoint będzie istnieć i wywalić workaround co jest dalej
  //     data: order,
  //     error: orderError,
  //     isError: isOrderError,
  //     isPending: isOrderPending,
  //   } = useOrder(Number(orderid));
  const {
    data: orders,
    error: ordersError,
    isError: isOrdersError,
    isPending: isOrdersPending,
  } = useGetOrderHistory();
  const order: OrderDTO | undefined = orders?.find(
    (o) => o.id === Number.parseInt(orderid ?? "0"),
  );
  const isOrderError = isOrdersError || !order;
  const orderError =
    ordersError ||
    (order === undefined ? new Error("Order not found") : undefined);
  const isOrderPending = isOrdersPending;

  const {
    data: meals,
    error: mealsError,
    isError: isMealsError,
    isPending: isMealsPending,
  } = useMeals();
  const navigate = useNavigate();

  const getTotalPriceForMeal = (meal: MealDto) => {
    if (!meals) {
      return null;
    }
    const matchingEntity = meals.find((mealEntity) => {
      return mealEntity.id === meal.mealId;
    });
    if (matchingEntity === undefined) {
      return null;
    }
    const parsedPricePerMeal = Number.parseFloat(matchingEntity.price);
    if (Number.isNaN(parsedPricePerMeal)) {
      return null;
    }
    return meal.quantity * Number.parseFloat(matchingEntity.price);
  };

  const getMealName = (meal: MealDto) => {
    if (!meals) {
      return null;
    }
    const matchingEntity = meals.find((mealEntity) => {
      return mealEntity.id === meal.mealId;
    });
    if (matchingEntity === undefined) {
      return null;
    }
    return matchingEntity.typeOfFood;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Szczegóły zamówienia
      </h2>

      {(isOrderPending || isMealsPending) && (
        <p className="text-center text-gray-500">Ładowanie...</p>
      )}
      {(isOrderError || isMealsError) && (
        <div>
          <p className="text-center text-red-500">Wystąpił błąd!</p>
          {orderError && (
            <p className="text-center text-red-500">
              {"OrderError: " + orderError.message}
            </p>
          )}
          {mealsError && (
            <p className="text-center text-red-500">
              {"MealsError: " + mealsError.message}
            </p>
          )}
        </div>
      )}
      {order && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">
              Zamówienie (numer {order.id})
            </h3>

            <div className="text-gray-600">
              <p>
                <strong className="font-semibold">Data zakupu:</strong>{" "}
                {order.dateOfPurchase}
              </p>
              <p>
                <strong className="font-semibold">Adres:</strong>{" "}
                {order.address || "Brak danych"}
              </p>
              <p>
                <strong className="font-semibold">Metoda płatności:</strong>{" "}
                {order.paymentMethod || "Brak danych"}
              </p>
              <p>
                <strong className="font-semibold">Stan:</strong> {order.state}
              </p>
              <p>
                <strong className="font-semibold">Dania:</strong>
              </p>
              <ul className="list-disc ml-6">
                {order.meals.map((meal) => (
                  <li key={meal.mealId}>
                    <strong className="font-semibold">Danie:</strong>{" "}
                    {getMealName(meal)},{" "}
                    <strong className="font-semibold">Ilość:</strong>{" "}
                    {meal.quantity}
                    <strong className="font-semibold">Cena:</strong>{" "}
                    {getTotalPriceForMeal(meal)}
                  </li>
                ))}
              </ul>
              <p>
                <strong className="font-semibold">Cena całkowita:</strong>{" "}
                {order.meals
                  .map((meal) => {
                    return getTotalPriceForMeal(meal) ?? 0;
                  })
                  .reduce((acc, next) => {
                    return acc + next;
                  }, 0)}
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

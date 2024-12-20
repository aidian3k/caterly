import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useMeals from "../queries/meals.query";
import MealDto from "../interfaces/MealDto";
import useGetOrderHistory from "../queries/orderHistory.query";
import { OrderDTO } from "../interfaces/Order";
import { translateOrderState } from "../utils/OrderStateTranslationMapper";

export default function OrderPage() {
  const { orderid } = useParams<{ orderid: string }>();

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
    if (!meals) return null;
    const matchingEntity = meals.find(
      (mealEntity) => mealEntity.id === meal.mealId,
    );
    if (!matchingEntity) return null;
    const parsedPricePerMeal = parseFloat(matchingEntity.price);
    if (isNaN(parsedPricePerMeal)) return null;
    return meal.quantity * parsedPricePerMeal;
  };

  const getMealName = (meal: MealDto) => {
    if (!meals) return null;
    const matchingEntity = meals.find(
      (mealEntity) => mealEntity.id === meal.mealId,
    );
    if (!matchingEntity) return null;
    return matchingEntity.typeOfFood;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-xl">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
        Szczegóły zamówienia
      </h2>

      {(isOrderPending || isMealsPending) && (
        <p className="text-center text-gray-500">Ładowanie...</p>
      )}

      {(isOrderError || isMealsError) && (
        <div className="space-y-4">
          <p className="text-center text-red-500 text-lg">Wystąpił błąd!</p>
          {orderError && (
            <p className="text-center text-red-500">
              {`OrderError: ${orderError.message}`}
            </p>
          )}
          {mealsError && (
            <p className="text-center text-red-500">
              {`MealsError: ${mealsError.message}`}
            </p>
          )}
        </div>
      )}

      {order && (
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Zamówienie (numer {order.id})
            </h3>

            <div className="space-y-2 text-gray-600">
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
                <strong className="font-semibold">Stan:</strong>{" "}
                {translateOrderState(order.state)}
              </p>

              <div>
                <strong className="font-semibold">Dania:</strong>
                <ul className="list-disc ml-6 space-y-2">
                  {order.meals.map((meal) => (
                    <li key={meal.mealId} className="flex justify-between">
                      <span>
                        <strong className="font-medium">Danie:</strong>{" "}
                        {getMealName(meal)},{" "}
                        <strong className="font-medium">Ilość:</strong>{" "}
                        {meal.quantity}
                      </span>
                      <span>
                        <strong className="font-medium">Cena:</strong>{" "}
                        {getTotalPriceForMeal(meal)?.toFixed(2)} PLN
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-lg font-semibold">
                <strong className="text-gray-800">Cena całkowita:</strong>{" "}
                {order.meals
                  .map((meal) => getTotalPriceForMeal(meal) ?? 0)
                  .reduce((acc, next) => acc + next, 0)
                  .toFixed(2)}{" "}
                PLN
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate("/orderHistory")}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Wróć do listy zamówień
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

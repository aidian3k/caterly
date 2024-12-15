import FoodCard from "../components/food-list/FoodCard";
import useMeals from "../queries/meals.query";
import CateringFoodEntity from "../interfaces/CateringFoodEntity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import CartItem from "../interfaces/CartItem";
import { addItemToCartAction } from "../redux/actions/cartActions";

export default function FoodListPage() {
  const { data: meals, error, isError, isPending } = useMeals();
  const cart = useSelector((state: RootState) => state.cart.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleAdd = (item: CateringFoodEntity): void => {
    const price = parseFloat(item.price);
    const cartItem: CartItem = {
      id: item.id,
      name: item.typeOfFood,
      price: !isNaN(price) ? price : 0,
      quantity: 1,
    };

    dispatch(addItemToCartAction(cartItem));
    navigate("/cart");
  };

  if (isError) {
    console.log(error);
  }

  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-3">Lista posiłków</h2>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd!</p>}
      {meals && (
        <div className="flex flex-col gap-4">
          {meals.length === 0 ? (
            <p>Brak posiłków</p>
          ) : (
            <>
              {meals.map((el) => (
                <FoodCard
                  key={el.id}
                  price={el.price}
                  typeOfFood={el.typeOfFood}
                  city={el.cateringEntity.city}
                  inCart={cart.some((item) => item.id === el.id)}
                  onCheckInCart={() => navigate("/cart")}
                  onAddToCart={() => handleAdd(el)}
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

import FoodCard from "../components/food-list/FoodCard";
import useMeals from "../queries/meals.query";

export default function FoodListPage() {
  const { data: meals, error, isError, isPending } = useMeals();

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
                />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

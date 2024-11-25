import FoodCard from "../components/food-list/FoodCard";
import useMeals from "../queries/meals.query";
import CateringFoodEntity from "../interfaces/CateringFoodEntity";

export default function FoodListPage() {
  const { data: meals, error, isError, isPending } = useMeals();
  const testMeals: CateringFoodEntity[] = [
    {
      price: "12,34 zł",
      typeOfFood: "Pies",
      id: 1,
      cateringEntity: {
        city: "Wroclaw",
        id: 2,
      },
    },
    {
      price: "12,34 zł",
      typeOfFood: "Kurczak",
      id: 6,
      cateringEntity: {
        city: "Lodz",
        id: 5,
      },
    },
    {
      price: "31,22 zł",
      typeOfFood: "Dog",
      id: 3,
      cateringEntity: {
        city: "Warszawa",
        id: 5,
      },
    },
  ];

  if (isError) {
    console.log(error);
  }

  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-3">Lista posiłków</h2>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd!</p>}
      {testMeals && (
        <div className="flex flex-col gap-4">
          {testMeals.length === 0 ? (
            <p>Brak posiłków</p>
          ) : (
            <>
              {testMeals.map((el) => (
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

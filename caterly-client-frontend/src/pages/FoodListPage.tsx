import FoodCard from "../components/food-list/FoodCard";
import styles from "./FoodListPage.module.css";
import useMeals from "../queries/meals.query";

export default function FoodListPage() {
  const { data: meals, error, isError, isPending } = useMeals();

  if (isError) {
    console.log(error);
  }

  return (
    <div className={styles.foodListContainer}>
      <h2>Lista posiłków</h2>
      {isPending && <p>Ładowanie...</p>}
      {isError && <p>Wystąpił błąd!</p>}
      {meals && (
        <>
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
        </>
      )}
    </div>
  );
}

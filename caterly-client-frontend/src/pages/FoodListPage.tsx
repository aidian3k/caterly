import { useEffect, useState } from "react";
import CateringFoodEntity from "../interfaces/CateringFoodEntity";
import apiClient from "../lib/axios";
import FoodCard from "../components/food-list/FoodCard";
import styles from "./FoodListPage.module.css";

export default function FoodListPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [meals, setMeals] = useState<CateringFoodEntity[]>([]);

  useEffect(() => {
    setLoading(true);

    apiClient
      .get<CateringFoodEntity[]>(`/meals`)
      .then((res) => {
        setMeals(res.data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(() => {
        console.log("Wystąpił błąd");
      });
  }, []);

  return (
    <div className={styles.foodListContainer}>
      <h2>Lista posiłków</h2>
      {loading ? (
        <p>Ładowanie...</p>
      ) : (
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

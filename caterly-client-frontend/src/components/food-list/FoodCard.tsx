import styles from "./FoodCard.module.css";

interface FoodCardProps {
  typeOfFood: string;
  price: string;
  city: string;
}

export default function FoodCard(props: FoodCardProps) {
  return (
    <div className={styles.foodCardContainer}>
      <div className={styles.foodCardTitle}>{props.typeOfFood}</div>
      <div>{`${props.city}, ${props.price}`}</div>
    </div>
  );
}

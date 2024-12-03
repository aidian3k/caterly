import Button from "../buttons/Button";

interface FoodCardProps {
  typeOfFood: string;
  price: string;
  city: string;
  inCart: boolean;
  onCheckInCart: () => void;
  onAddToCart: () => void;
}

export default function FoodCard(props: FoodCardProps) {
  return (
    <div className="w-full flex flex-row justify-between p-4 drop-shadow bg-gray-100 rounded hover:bg-gray-200 transition-colors items-center">
      <div className="font-bold text-xl">{props.typeOfFood}</div>
      <div className="flex flex-row gap-3 items-center">
        <div>{`${props.city}, ${props.price} zł`}</div>
        {props.inCart ? (
          <Button label="Zobacz w koszyku" onClick={props.onCheckInCart} />
        ) : (
          <Button label="Dodaj do koszyka" onClick={props.onAddToCart} />
        )}
      </div>
    </div>
  );
}

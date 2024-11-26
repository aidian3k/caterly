interface FoodCardProps {
  typeOfFood: string;
  price: string;
  city: string;
}

export default function FoodCard(props: FoodCardProps) {
  return (
    <div className="w-full flex flex-row justify-between p-4 drop-shadow bg-gray-100 rounded hover:bg-gray-200 transition-colors">
      <div className="font-bold text-xl">{props.typeOfFood}</div>
      <div>{`${props.city}, ${props.price}`}</div>
    </div>
  );
}

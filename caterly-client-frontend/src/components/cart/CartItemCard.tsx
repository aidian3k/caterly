import Button from "../buttons/Button";
import CartItem from "../../interfaces/CartItem";

interface CartItemCardProps {
  item: CartItem;
  onDelete: () => void;
}

export default function CartItemCard({ item, onDelete }: CartItemCardProps) {
  return (
    <div className="w-full flex flex-row justify-between p-4 drop-shadow bg-gray-100 rounded hover:bg-gray-200 transition-colors items-center">
      <div className="flex flex-row gap-5 items-center">
        <div className="font-bold text-xl">{item.name}</div>
        <div>
          {item.quantity} x {item.price} PLN
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div className="font-bold">
          Łącznie: {(item.price * item.quantity).toFixed(2)} PLN
        </div>
        <Button label="Usuń" onClick={onDelete} />
      </div>
    </div>
  );
}

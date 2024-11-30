import Button from "../buttons/Button";
import CartItem from "../../interfaces/CartItem";
import { useRef } from "react";

interface CartItemCardProps {
  item: CartItem;
  onDelete: () => void;
  onUpdate: (id: number, quantity: number) => void;
}

export default function CartItemCard({
  item,
  onDelete,
  onUpdate,
}: CartItemCardProps) {
  const quantityRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    if (!quantityRef.current) return;
    const newQuantity = parseInt(quantityRef.current.value);

    if (!isNaN(newQuantity)) {
      onUpdate(item.id, newQuantity);
    }
  };

  return (
    <div className="w-full flex flex-row justify-between p-4 drop-shadow bg-gray-100 rounded hover:bg-gray-200 transition-colors items-center">
      <div className="flex flex-row gap-5 items-center">
        <div className="font-bold text-xl">{item.name}</div>
        <div>
          {item.quantity} x {item.price} PLN
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <input
          ref={quantityRef}
          type="number"
          className="p-1 w-20 bg-transparent border-gray-300 border-2 rounded-md"
          defaultValue={item.quantity}
          min={1}
          step={1}
        />
        <div className="font-bold">
          Łącznie: {(item.price * item.quantity).toFixed(2)} PLN
        </div>
        <Button label="Zapisz" onClick={handleUpdate} />
        <Button label="Usuń" onClick={onDelete} />
      </div>
    </div>
  );
}

import { CateringOfferDTO } from "../../../interfaces/offer/CateringOfferDTO";
import React from "react";
import EditMealRequest from "../../../interfaces/offer/EditMealRequest";

interface OfferDetailsFormProps {
  offer: CateringOfferDTO;
  onSave: (offer: EditMealRequest) => void;
}

export default function OfferDetailsForm({
  offer,
  onSave,
}: OfferDetailsFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData: EditMealRequest = {
      companyId: 1,
      price: parseFloat(formData.get("price") as string),
      typeOfFood: formData.get("name") as string,
    };

    onSave(updatedData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nazwa</label>
      <input
        name="name"
        className="block mt-1 px-4 py-2 border-gray-300 border rounded w-80"
        type="text"
        defaultValue={offer.typeOfFood}
        required
      />
      <label className="mt-2" htmlFor="price">
        Cena
      </label>
      <input
        type="number"
        className="block mt-1 px-4 py-2 border-gray-300 border rounded w-80"
        defaultValue={offer.price}
        step={0.01}
        min={0.01}
        required
        name="price"
      />
      <button
        type="submit"
        className="py-2 px-4 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors ease-in-out duration-200"
      >
        Zaktualizuj
      </button>
    </form>
  );
}

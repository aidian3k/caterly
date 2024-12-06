import React from "react";
import { CateringOfferDTO } from "../../../interfaces/offer/CateringOfferDTO";
import OfferItem from "./OfferItem.component";
import { DeleteFoodRequest } from "../../../interfaces/offer/DeleteFoodRequest";
import { useNavigate } from "react-router-dom";

interface OfferListProps {
  offers: CateringOfferDTO[];
  onDeleteOffer: (deleteRequest: DeleteFoodRequest) => Promise<void>;
}

const OffersList: React.FC<OfferListProps> = ({ offers, onDeleteOffer }) => {
  const navigate = useNavigate();
  const handleDelete = async (id: number) => {
    const deleteRequest = new DeleteFoodRequest(id);

    try {
      await onDeleteOffer(deleteRequest);
    } catch (error) {
      console.error("Failed to delete offer:", error);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/offer/1/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {offers.map((offer) => (
        <OfferItem
          key={offer.id}
          offer={offer}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default OffersList;

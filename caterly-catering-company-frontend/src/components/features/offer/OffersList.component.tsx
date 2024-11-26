import React from "react";
import {CateringOfferDTO} from "../../../interfaces/offer/CateringOfferDTO";
import OfferItem from "./OfferItem.component";
import { DeleteFoodRequest } from "../../../interfaces/offer/DeleteFoodRequest";

interface OfferListProps {
    offers: CateringOfferDTO[];
    onDeleteOffer: (deleteRequest: DeleteFoodRequest) => Promise<void>;
}

const sampleOffers: CateringOfferDTO[] = [
    {
        id: 1,
        price: 29.99,
        typeOfFood: "Italian",
    },
    {
        id: 2,
        price: 19.99,
        typeOfFood: "Mexican",
    },
    {
        id: 3,
        price: 24.99,
        typeOfFood: "Chinese",
    },
    {
        id: 4,
        price: 34.99,
        typeOfFood: "French",
    },
];

const OffersList: React.FC<OfferListProps> = ({ offers, onDeleteOffer }) => {

    const handleDelete = async (id: number) => {
        const deleteRequest = new DeleteFoodRequest(id);

        try {
            await onDeleteOffer(deleteRequest); 
        } catch (error) {
            console.error("Failed to delete offer:", error);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {sampleOffers.map((offer) => (
                <OfferItem key={offer.id} offer={offer} onDelete={handleDelete}/>
            ))}
        </div>
    );
};

export default OffersList;

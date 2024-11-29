import React from "react";
import {CateringOfferDTO} from "../../../interfaces/offer/CateringOfferDTO";

interface OfferItemProps {
    offer: CateringOfferDTO;
    onDelete: (id: number) => void;
}

const OfferItem: React.FC<OfferItemProps> = ({ offer, onDelete }) => {
    const handleDelete = () => {
        onDelete(offer.id); 
    };
    
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800">{offer.typeOfFood}</h2>
            <p className="text-lg text-gray-600">{offer.price.toFixed(2)} zł</p>
            <button 
                onClick={handleDelete}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 ease-in-out"
            >
                Usuń z oferty
            </button>
        </div>
    );
};

export default OfferItem;

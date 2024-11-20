import React from "react";
import {CateringOfferDTO} from "../../../interfaces/offer/CateringOfferDTO";

interface OfferItemProps {
    offer: CateringOfferDTO;
}

const OfferItem: React.FC<OfferItemProps> = ({ offer }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-200 ease-in-out">
            <h2 className="text-xl font-semibold text-gray-800">{offer.typeOfFood}</h2>
            <p className="text-lg text-gray-600">{offer.price.toFixed(2)} zł</p>
        </div>
    );
};

export default OfferItem;

import React from "react";
import {CateringOfferDTO} from "../../../interfaces/offer/CateringOfferDTO";
import OfferItem from "./OfferItem.component";

interface OfferListProps {
    offers: CateringOfferDTO[];
}

const OffersList: React.FC<OfferListProps> = ({ offers }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {offers.map((offer) => (
                <OfferItem key={offer.id} offer={offer} />
            ))}
        </div>
    );
};

export default OffersList;

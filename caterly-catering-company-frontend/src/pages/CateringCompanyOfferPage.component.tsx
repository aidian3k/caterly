import {useGetCateringCompanyOffer} from "../api/react-query/query/offer/offer.query";
import React from "react";
import OffersList from "../components/features/offer/OffersList.component";

const CateringCompanyOfferPage = () => {
    const { data: offers, error, isError, isPending } = useGetCateringCompanyOffer(1);

    return (
        <div className="container p-4">
            <h1 className={"text-xl"}>Oferta firmy cateringowej</h1>
            {
                isPending && (
                    <p>Loading...</p>
                )
            }
            {
                offers && (
                    <OffersList offers={offers} />
                )
            }
            {
                isError && (
                    <p>Wystapił błąd: {error.message}</p>
                )
            }
        </div>
    )
}

export default CateringCompanyOfferPage;

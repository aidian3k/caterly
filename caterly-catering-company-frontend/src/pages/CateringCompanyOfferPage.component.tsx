import {useGetCateringCompanyOffer} from "../api/react-query/query/offer/offer.query";
import React from "react";
import OffersList from "../components/features/offer/OffersList.component";
import { CateringOfferDTO } from "../interfaces/offer/CateringOfferDTO";
import { DeleteFoodRequest } from "../interfaces/offer/DeleteFoodRequest";
import { Endpoints } from "../api/Endpoints";
import axiosInstance from "../api/axiosConfig";

const CateringCompanyOfferPage = () => {
    const { data: offers, error, isError, isPending } = useGetCateringCompanyOffer(1);

    const deleteFood = async (d: DeleteFoodRequest): Promise<void> => {
        const foodId = d.getFoodId();

        try {
            const url = Endpoints.FOOD.replace(":cateringCompanyId", "1").replace(":foodId", foodId.toString());
        
            const response = await axiosInstance.delete(url);

            if (response.status !== 200 && response.status !== 204) {
                throw new Error(`Failed to delete food item with ID: ${foodId}`);
            }
    
            console.log(`Food item with ID ${foodId} deleted successfully.`);
        } catch (error) {
            console.error(`Error deleting food item with ID ${foodId}:`, error);
        }
    };
    
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
                    <OffersList offers={offers} onDeleteOffer={deleteFood}/>
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

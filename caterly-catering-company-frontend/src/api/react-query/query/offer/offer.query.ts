import {useQuery} from "@tanstack/react-query";
import {Endpoints} from "../../../Endpoints";
import axiosInstance from "../../../axiosConfig";
import {CateringOfferDTO} from "../../../../interfaces/offer/CateringOfferDTO";

export function useGetCateringCompanyOffer(cateringCompanyId: number) {
    return useQuery({
        queryKey: ["offer"],
        queryFn: async () => {
            const response = await axiosInstance.get<CateringOfferDTO[]>(
                Endpoints.OFFER.replace(":cateringCompanyId", cateringCompanyId.toString()),
            );
            return response.data;
        },
    });
}
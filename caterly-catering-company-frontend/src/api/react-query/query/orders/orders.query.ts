import {useQuery} from "@tanstack/react-query";
import {Endpoints} from "../../../Endpoints";
import axiosInstance from "../../../axiosConfig";
import {CateringOrderDTO} from "../../../../interfaces/order/CateringOrderDTO";

export function useGetCateringCompanyOrders(cateringCompanyId: number) {
    return useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            const response = await axiosInstance.get<CateringOrderDTO[]>(
                Endpoints.ORDERS.replace(":cateringCompanyId", cateringCompanyId.toString()),
            );
            return response.data;
        },
    });
}
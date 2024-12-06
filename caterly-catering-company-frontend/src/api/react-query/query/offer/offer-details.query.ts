import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../axiosConfig";
import { CateringOfferDTO } from "../../../../interfaces/offer/CateringOfferDTO";

export default function useOfferDetails(
  cateringCompanyId?: string,
  foodId?: string,
) {
  return useQuery({
    queryKey: ["offer", cateringCompanyId, foodId],
    queryFn: async (): Promise<CateringOfferDTO> => {
      const res = await axiosInstance.get<CateringOfferDTO>(
        `/api/offers/${cateringCompanyId}/${foodId}`,
      );

      return res.data;
    },
    staleTime: Infinity,
    refetchOnMount: "always",
  });
}

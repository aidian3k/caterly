import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../axiosConfig";
import { CateringOfferDTO } from "../../../../interfaces/offer/CateringOfferDTO";

export default function useOfferDetails(
  cateringCompanyId?: string,
  offerId?: string,
) {
  return useQuery({
    queryKey: ["offer", cateringCompanyId, offerId],
    queryFn: async (): Promise<CateringOfferDTO> => {
      const res = await axiosInstance.get<CateringOfferDTO>(
        `/api/offers/${cateringCompanyId}/${offerId}`,
      );

      return res.data;
    },
    staleTime: Infinity,
    refetchOnMount: "always",
  });
}

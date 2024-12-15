import { useQuery } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import CateringFoodEntity from "../interfaces/CateringFoodEntity";

export default function useMeals() {
  return useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const response = await apiClient.get<CateringFoodEntity[]>(`/meals`);

      return response.data;
    },
  });
}

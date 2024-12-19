import { useQuery } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import { OrderDTO } from "../interfaces/Order";

export default function useGetOrderHistory() {
  return useQuery({
    queryKey: ["orderHistory"],
    queryFn: async () => {
      const response = await apiClient.get<OrderDTO[]>(`/orders`);

      return response.data;
    },
  });
}

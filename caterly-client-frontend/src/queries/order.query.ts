import { useQuery } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import OrderEntity from "../interfaces/OrderEntity";

export default function useOrder(orderid: number) {
  return useQuery({
    queryKey: ["order", orderid],
    queryFn: async () => {
      const response = await apiClient.get<OrderEntity>(`/order/${orderid}`);
      return response.data;
    },
  });
}

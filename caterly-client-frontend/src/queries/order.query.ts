import { useQuery } from "@tanstack/react-query";
import apiClient from "../lib/axios";
import { OrderDTO } from "../interfaces/Order";

export default function useOrder(orderid: number) {
  return useQuery({
    queryKey: ["order", orderid],
    queryFn: async () => {
      const response = await apiClient.get<OrderDTO>(`/order/${orderid}`);
      return response.data;
    },
  });
}

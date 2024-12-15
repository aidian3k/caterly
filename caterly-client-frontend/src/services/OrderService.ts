import apiClient from "../lib/axios";

const OrderService = {
  addReview: async (orderId: number, rating: number, reviewText: string) => {
    try {
      const response = await apiClient.post("/orders/${orderId}/review", {
        rating,
        reviewText,
      });
      console.log("Wysłano opinię o zamówieniu:", response.data);
    } catch (error: any) {
      if (error.response) {
        throw new Error(
          error.response.data.message || "Błąd wysyłania opinii.",
        );
      }
      throw new Error(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie później.",
      );
    }
  },
};

export default OrderService;

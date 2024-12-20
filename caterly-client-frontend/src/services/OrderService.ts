import apiClient from "../lib/axios";

const OrderService = {
  addReview: async (orderId: number, rating: number, reviewText: string) => {
    try {
      const endpoint = "/orders/" + orderId + "/review";
      const response = await apiClient.post(endpoint, {
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
  placeOrder: async (
    orderId: number,
    apartment_number: string,
    city: string,
    house_number: string,
    payment_method: string,
    state: string,
    street: string,
    zip: string,
    amount: number,
  ) => {
    try {
      const endpoint = "/orders/" + orderId + "/place";
      const response = await apiClient.post(endpoint, {
        apartment_number,
        city,
        house_number,
        payment_method,
        state,
        street,
        zip,
        amount,
      });
      console.log("Zamówienie złożone:", response.data);
    } catch (error: any) {
      if (error.response) {
        throw new Error(
          error.response.data.message ||
            "Błąd serwera. Nie można chwilowo złożyć zamówienia.",
        );
      }
      throw new Error(
        "Nie udało się połączyć z serwerem. Spróbuj ponownie później.",
      );
    }
  },
};

export default OrderService;

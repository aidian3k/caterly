import { OrderState } from "../interfaces/Order";

export const translateOrderState = (orderState: OrderState) => {
  switch (orderState) {
    case OrderState.FINISHED:
      return "Zakończone";
    case OrderState.PURCHASED:
      return "Opłacone";
    case OrderState.SHIPPED:
      return "Dostarczone";
  }
};

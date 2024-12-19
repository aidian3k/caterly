import { OrderState } from "../interfaces/Order";

export const translateOrderState = (status: OrderState) => {
  switch (status) {
    case OrderState.DRAFT:
      return "Niezłożone";
    case OrderState.PAID:
      return "W realizacji";
    case OrderState.SHIPPED:
      return "Dostarczone";
  }
};

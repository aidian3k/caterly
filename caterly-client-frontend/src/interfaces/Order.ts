import MealDto from "./MealDto";

export enum OrderState {
  DRAFT = "DRAFT",
  SHIPPED = "SHIPPED",
  PAID = "PAID",
}

export interface OrderDTO {
  id: number;
  clientId: number;
  address: string | null;
  dateOfPurchase: string;
  paymentMethod: string | null;
  state: OrderState;
  rating: number | null;
  review: string | null;
  meals: MealDto[];
}

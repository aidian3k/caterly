export enum OrderState {
  PURCHASED = "PURCHASED",
  SHIPPED = "SHIPPED",
  FINISHED = "FINISHED",
}

export interface OrderDTO {
  id: number;
  name: string;
  dateOfPurchase: string;
  orderState: OrderState;
}

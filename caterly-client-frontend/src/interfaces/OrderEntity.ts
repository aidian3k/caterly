interface OrderEntity {
  id: number;
  name: string;
  dateOfPurchase: string;
  address: string;
  count: number;
  totalPrice: number;
  state: string;
}

export default OrderEntity;

export interface CateringOrderDTO {
    id: number;
    dateOfPurchase: Date;
    state: string;
    address: string;
    client: string;
    products: Array<number>;
}

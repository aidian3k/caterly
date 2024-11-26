import { DeleteFoodRequest } from "./offer/DeleteFoodRequest";

export interface IDeleteFood {
    deleteFood(d: DeleteFoodRequest): void;
}
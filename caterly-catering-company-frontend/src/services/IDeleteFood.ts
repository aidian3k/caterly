import { DeleteFoodRequest } from "./DeleteFoodRequest";

interface FoodItem {
    id: number;
    name: string;
}

const foodData: FoodItem[] = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Salad' },
];

export class IDeleteFood {
    static getFoods(): FoodItem[] {
        return foodData;
    }

    static deleteFood(request: DeleteFoodRequest): boolean {
        const foodId = request.getFoodId();
        const index = foodData.findIndex(food => food.id === foodId);
        if (index !== -1) {
            foodData.splice(index, 1);
            return true;
        }
        return false;
    }
}

export{}

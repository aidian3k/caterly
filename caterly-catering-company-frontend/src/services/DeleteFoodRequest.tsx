interface FoodItem {
    id: number;
    name: string;
}


// for now, I would fetch food data from backend when it's implemented
const foodData: FoodItem[] = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Salad' },
];

export class DeleteFoodRequest {
    private foodId: number;
    private attribute2: string;

    constructor(foodId: number, attribute2: string = '') {
        this.foodId = foodId;
        this.attribute2 = attribute2;
    }

    getFoodId(): number {
        return this.foodId;
    }

    setFoodId(foodId: number): void {
        this.foodId = foodId;
    }

    getAttribute2(): string {
        return this.attribute2;
    }

    setAttribute2(attribute2: string): void {
        this.attribute2 = attribute2;
    }

    deleteFood(d: DeleteFoodRequest): boolean {
        const foodId = d.getFoodId();
        const index = foodData.findIndex(food => food.id === foodId);
        if (index !== -1) {
            // here would be function to update it on the backed ofc
            // as I mock it now, I just delete it from this array
            foodData.splice(index, 1);
            return true;
        }
        return false;
    }
}

export {}
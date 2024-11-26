export class DeleteFoodRequest {
    private foodId: number;
    private attribute2: string;

    constructor(foodId: number) {
        this.foodId = foodId;
        this.attribute2 = "delete";
    }

    public getFoodId(): number {
        return this.foodId;
    }

    public setFoodId(foodId: number): void {
        this.foodId = foodId;
    }

    public getAttribute2(): string {
        return this.attribute2;
    }

    public setAttribute2(attribute2: string): void {
        this.attribute2 = attribute2;
    }
}

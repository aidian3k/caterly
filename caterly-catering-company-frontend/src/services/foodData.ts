// src/services/foodData.ts

export interface FoodItem {
    id: number;
    name: string;
}

export const foodData: FoodItem[] = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Burger' },
    { id: 3, name: 'Salad' },
];

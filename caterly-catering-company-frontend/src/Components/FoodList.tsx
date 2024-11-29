import React from 'react';

interface FoodListProps {
    foods: { id: number; name: string }[];
}

export default function FoodList({ foods }: FoodListProps) {
    return (
        <div className="food-list">
            <h3>Lista posiłków</h3>
            <ul>
                {foods.map((food) => (
                    <li key={food.id}>
                        {food.name} (ID: {food.id})
                    </li>
                ))}
            </ul>
        </div>
    );
}

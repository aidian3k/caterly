import React, { useState, useEffect } from 'react';

import DeleteFoodRequestForm from './Components/DeleteFoodRequestForm';
import FoodList from './Components/FoodList';
import { IDeleteFood } from './services/IDeleteFood';
import { DeleteFoodRequest } from './services/DeleteFoodRequest';
import './DeleteFoodView.scss';
 
export default function DeleteFoodView() {
    const [foods, setFoods] = useState<{ id: number; name: string }[]>([]);

    useEffect(() => {
        setFoods(IDeleteFood.getFoods());
    }, []);

    const handleDeleteFood = (request: DeleteFoodRequest) => {
        const success = IDeleteFood.deleteFood(request);
        if (success) {
            setFoods([...IDeleteFood.getFoods()]); // Aktualizacja listy posiłków
            alert(`Posiłek o ID ${request.getFoodId()} został usunięty.`);
        } else {
            alert(`Nie znaleziono posiłku o ID ${request.getFoodId()}.`);
        }
    };

    return (
        <div className="delete-food-view">
            <h1>Panel Usuwania Posiłków</h1>
            <DeleteFoodRequestForm onDeleteFood={handleDeleteFood} />
            <FoodList foods={foods} />
        </div>
    );
}

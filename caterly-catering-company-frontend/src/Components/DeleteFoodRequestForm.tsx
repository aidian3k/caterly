import React, { useState } from 'react';
import { DeleteFoodRequest } from '../services/DeleteFoodRequest';
import './DeleteFoodRequestForm.scss';

interface DeleteFoodRequestFormProps {
    onDeleteFood: (request: DeleteFoodRequest) => void;
}

export default function DeleteFoodRequestForm({ onDeleteFood }: DeleteFoodRequestFormProps) {
    const [foodId, setFoodId] = useState<string>('');
    const [attribute2, setAttribute2] = useState<string>('');

    const handleDelete = () => {
        if (foodId) {
            const request = new DeleteFoodRequest(parseInt(foodId, 10), attribute2);
            onDeleteFood(request);
            setFoodId('');
            setAttribute2('');
        }
    };

    return (
        <div className="delete-food-request-form">
            <h3>Usuń posiłek</h3>
            <input
                type="number"
                placeholder="Wprowadź ID posiłku"
                value={foodId}
                onChange={(e) => setFoodId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Attribute2 (opcjonalne)"
                value={attribute2}
                onChange={(e) => setAttribute2(e.target.value)}
            />
            <button onClick={handleDelete}>Usuń posiłek</button>
        </div>
    );
}

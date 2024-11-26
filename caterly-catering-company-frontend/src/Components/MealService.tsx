import fetch from 'node-fetch';

export const AddMeal = async function(name: string, description: string, price: number) {
    return fetch("", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({name, description, price})})
}

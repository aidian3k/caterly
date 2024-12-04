import React from "react";
import { Endpoints } from "../api/Endpoints";
import axiosInstance from "../api/axiosConfig";
import { useState } from "react";

const CateringCompanyNewOfferForm = () => {
    const [newMeal, setNewMeal] = useState({ name: "", description: "", price: "", companyId: "1" });
    const [error, setError] = useState({message: ""});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewMeal({ ...newMeal, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let response = null

        try {
            response = await axiosInstance.post(Endpoints.OFFER_ADD, newMeal);
            if (response.status !== 201) {
                throw new Error("Failed to create new meal");
            }
            console.log("New meal created successfully");
        } catch (er) {
            console.error("Error creating new meal:", er);
            setError({ message: response?.data?.message || "Failed to create new meal" });
        }
    };

    return (
        <div className="container p-4">
            <form onSubmit={handleSubmit} className="mt-4">
                <h2 className="text-lg">Dodaj nowy posiłek</h2>
                <div className="mb-2">
                    <label htmlFor="name" className="block">Nazwa:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newMeal.name}
                        onChange={handleInputChange}
                        className="border p-1 w-full"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="block">Opis:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={newMeal.description}
                        onChange={handleInputChange}
                        className="border p-1 w-full"
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="price" className="block">Cena:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={newMeal.price}
                        onChange={handleInputChange}
                        className="border p-1 w-full"
                        required
                    />
                </div>
                {
                    error.message != "" && (
                        <p>Wystapił błąd: {error.message}</p>
                    )
                }
                <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Dodaj posiłek</button>
            </form>
        </div>
    )
};

export default CateringCompanyNewOfferForm;

import React from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link className="text-white hover:underline" to="/">Dashboard</Link>
                </li>
                <li>
                    <Link className="text-white hover:underline" to="/offer">Własne oferty cateringowe</Link>
                </li>
                <li>
                    <Link className="text-white hover:underline" to="/offer/new">Dodaj nową ofertę</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;

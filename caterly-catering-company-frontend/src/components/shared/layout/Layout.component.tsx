import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation.component";

const Layout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;

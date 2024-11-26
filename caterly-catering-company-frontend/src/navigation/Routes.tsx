import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.component";
import CateringCompanyOfferPage from "../pages/CateringCompanyOfferPage.component";
import Layout from "../components/shared/layout/Layout.component";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/offer",
                element: <CateringCompanyOfferPage />,
            },
        ],
    },
]);

export default router;
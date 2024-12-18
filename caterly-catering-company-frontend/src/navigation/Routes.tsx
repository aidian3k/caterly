import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage.component";
import CateringCompanyOfferPage from "../pages/CateringCompanyOfferPage.component";
import CateringCompanyNewOfferForm from "../pages/CateringCompanyNewOfferForm.component";
import Layout from "../components/shared/layout/Layout.component";
import CateringCompanyEditOfferPage from "../pages/CateringCompanyEditOfferPage.component";
import CateringCompanyOrdersPage from "../pages/CateringCompanyOrdersPage.component";

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
      {
        path: "/offer/new",
        element: <CateringCompanyNewOfferForm />,
      },
      {
        path: "/offer/:cateringCompanyId/:offerId",
        element: <CateringCompanyEditOfferPage />,
      },
      {
        path: "/orders",
        element: <CateringCompanyOrdersPage />,
      },
    ],
  },
]);

export default router;

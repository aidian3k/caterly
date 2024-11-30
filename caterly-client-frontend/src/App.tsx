import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginForm from "./pages/login/LoginForm";
import FoodListPage from "./pages/FoodListPage";
import Cart from "./components/cart/Cart";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import RegistrationForm from "./pages/registration/RegistrationForm";
import { Provider } from "react-redux";
import store from "./redux/store";

const tryAuthenticate = async () => {
  // TODO: Check if user is already logged in after opening the app
  return null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
    loader: tryAuthenticate, // TODO: should redirect to dashboard if logged in
  },
  {
    path: "/register",
    element: <RegistrationForm />,
    loader: tryAuthenticate, // TODO: should redirect to dashboard if logged in
  },
  {
    path: "/",
    element: <Layout />,
    loader: tryAuthenticate, // TODO: shouldn't allow unauthenticated users
    children: [
      {
        path: "dashboard",
        element: <p>Strona główna</p>,
      },
      {
        path: "meals",
        element: <FoodListPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;

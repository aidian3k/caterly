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
import apiClient from "./lib/axios";
import { loginAction } from "./redux/actions/authActions";
import AuthorizeView from "./components/layout/AuthorizeView";

const tryAuthenticate = async () => {
  try {
    await apiClient.get("/auth/ac");
    store.dispatch(loginAction());
  } catch {
    // empty
  }
  return null;
};

const router = createBrowserRouter([
  {
    loader: tryAuthenticate,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegistrationForm />,
      },
      {
        path: "/",
        element: (
          <AuthorizeView>
            <Layout />
          </AuthorizeView>
        ),
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

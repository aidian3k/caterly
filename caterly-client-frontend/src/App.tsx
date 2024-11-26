import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoginForm from "./pages/login/LoginForm";

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
    element: <p>Rejestracja</p>,
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
        element: <p>Lista posiłków</p>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

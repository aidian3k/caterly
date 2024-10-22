import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import NewMealForm from "./Components/NewMealForm";
import MainPage from "./Components/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/catering-company",
    element: <MainPage />,
  },
  {
    path: "/catering-company/new-meal",
    element: <NewMealForm />,
  },
]);

function App() {
  const navigate = useNavigate();
  return (
    <RouterProvider router={router} />
  );
}

export default App;

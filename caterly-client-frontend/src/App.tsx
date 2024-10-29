import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const tryAuthenticate = async () => {
  // TODO: Sprawdza, czy użytkownik po uruchomieniu aplikacji jest już zalogowany
  //  Jak tak, to dispatchuje login action w reduxie
  return null;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <p>Logowanie</p>,
    loader: tryAuthenticate, // TODO: jak zalogowany to przenies od razu do strony glownej
  },
  {
    path: "/register",
    element: <p>Rejestracja</p>,
    loader: tryAuthenticate, // TODO: jak zalogowany to przenies od razu do strony glownej
  },
  {
    path: "/",
    element: <p>Layout</p>,
    loader: tryAuthenticate,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

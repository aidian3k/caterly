import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import './index.css';
=======
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import NewMealForm from "./Components/NewMealForm";
import DeleteFoodView from "./DeleteFoodView";
>>>>>>> ce72e7e (deleting meals first version)
>>>>>>> 9e0bf63 (deleting meals first version)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,  
);

<<<<<<< HEAD
root.render(
  <React.StrictMode>
    <App />
=======
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/catering-company",
    element: <App />,
  }, 
  {
    path: "/delete",
    element: <DeleteFoodView />,
  }
]);

root.render(
  <React.StrictMode>
    <NewMealForm />
    <DeleteFoodView />
>>>>>>> ce72e7e (deleting meals first version)
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





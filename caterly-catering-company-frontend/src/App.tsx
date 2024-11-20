import React from "react";
import "./App.css";
import {RouterProvider} from "react-router-dom";
import router from "./navigation/Routes";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./api/react-query/queryClient";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  );
}

export default App;

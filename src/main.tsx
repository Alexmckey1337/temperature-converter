import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Temperature } from "./pages/Temperature/Temperature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Temperature />,
  },
  {
    path: "/metrictoimperial",
    element: <div>Metric to imperial</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Test from "./pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
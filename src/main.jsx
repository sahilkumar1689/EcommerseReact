import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BagContainer from "../src/Components/Bag.jsx";
import Mainsection from "../src/Components/Mainsection.jsx";
import { Provider } from "react-redux";
import MyntraStore from "./Store/MainStore.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Mainsection /> },
      { path: "/bag", element: <BagContainer /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tabs from "./components/Tabs";
import { loader } from "./components/Tabs";
import DummyTable from "./tabs/dummyTable";
import DummyChart from "./tabs/dummyChart";
import DummyList from "./tabs/dummyList";

const router = createBrowserRouter([
  {
    path: "/",
    loader: loader,
    element: <Tabs />,
  },
  {
    path: "/dummyTable",
    element: <DummyTable />,
  },
  {
    path: "/dummyChart",
    element: <DummyChart />,
  },
  {
    path: "/dummyList",
    element: <DummyList />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import "./App.css";
import "./index.css";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Helpers/routes";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;

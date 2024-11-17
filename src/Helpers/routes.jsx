import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Paste from "../components/Paste";
import ViewPaste from "../components/ViewPaste";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/pastes",
    element: (
      <>
        <Navbar />
        <Paste />
      </>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <>
        <Navbar />
        <ViewPaste />
      </>
    ),
  },
]);

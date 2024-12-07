import React, { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { UserContext } from "../store/authStore";
const Body = () => {
 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Body;

import React, { useEffect, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { UserContext } from "../store/authStore";
const Body = () => {
  const { authUser, setAuthUser } = useContext(UserContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        });
      } else {
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, [setAuthUser]);

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

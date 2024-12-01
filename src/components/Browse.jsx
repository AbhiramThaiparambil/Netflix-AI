import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";

const Browse = () => {
  const { authUser } = useContext(UserContext);
  return (
    <div>
      <Header/>
    </div>
  );
};

export default Browse;

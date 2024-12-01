import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";
import useNowPlayingMovie from "../utils/useNowPlayingMovies";

const Browse = () => {
    useNowPlayingMovie()
  const { authUser } = useContext(UserContext);
  return (
    <div>
      <Header/>
      
    </div>
  );
};

export default Browse;

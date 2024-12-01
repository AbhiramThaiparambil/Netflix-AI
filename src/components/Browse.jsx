import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";
import useNowPlayingMovie from "../utils/useNowPlayingMovies";
import MainBrowse from "./mainBrowse";
const Browse = () => {
  useNowPlayingMovie();
  const { authUser } = useContext(UserContext);
  return (
    <div>
      <Header />
      <MainBrowse />
    </div>
  );
};

export default Browse;

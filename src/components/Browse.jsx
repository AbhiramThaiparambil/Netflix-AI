import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";
import useNowPlayingMovie from "../utils/useNowPlayingMovies";
import MainBrowse from "./mainBrowse";
import SecondaryBrowse from "./secondaryBrowse";
const Browse = () => {
  useNowPlayingMovie();
  const { authUser } = useContext(UserContext);
  return (
    <div>
   <div>
   <Header />
   </div>
      <MainBrowse />
      <SecondaryBrowse />
    </div>
  );
};

export default Browse;

import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";
import useNowPlayingMovie from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import MainBrowse from "./mainBrowse";
import SecondaryBrowse from "./secondaryBrowse";
const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies()
  const { authUser } = useContext(UserContext);
  return (
    <div>
   <div >
   <Header />
   </div>
  
      <MainBrowse />
      <SecondaryBrowse />
      
    </div>
  );
};

export default Browse;

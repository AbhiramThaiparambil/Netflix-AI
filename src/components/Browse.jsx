import React, { useContext } from "react";
import Header from "./Header";
import { UserContext } from "../store/authStore";
import useNowPlayingMovie from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import MainBrowse from "./mainBrowse";
import SecondaryBrowse from "./secondaryBrowse";
import { useSelector } from "react-redux";
import AiSearchPage from "./aiSearchPage";

const Browse = () => {
  const aiSearch = useSelector((store) => store.Config?.aiSearch);

  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  const { authUser } = useContext(UserContext);
  return (
    <div>
      <div>
        <Header />
      </div>

      {aiSearch ? (
        <AiSearchPage />
      ) : (
        <>
          <MainBrowse />
          <SecondaryBrowse />
        </>
      )}
    </div>
  );
};

export default Browse;

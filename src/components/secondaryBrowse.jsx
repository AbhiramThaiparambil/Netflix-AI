import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";
const SecondaryBrowse = () => {
  //     nowPlayingMovies: null,
  //     movieTrailer: null,
  //     popularMovies: null,
  //     topRatedMovies: null,
  // upcomingMovies: null
  const nowPlaying = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);

  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  return (
    <div className= "bg-black">
          <div className="md:-mt-56 relative z-10 p-5 "> 
      <MovieList title={"nowPlayingMovies"} movies={nowPlaying} />
      
      <MovieList title={"topRatedMovies"} movies={topRatedMovies} />
      <MovieList title={"popularMovies"} movies={popularMovies} />
      <MovieList title={"nowPlayingMovies"} movies={nowPlaying} />
      {/* <MovieList title={"nowPlayingMovies"} movies={movies} /> */}
      </div>
    </div>
  );
};

export default SecondaryBrowse;

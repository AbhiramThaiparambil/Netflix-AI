import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailer } from "../store/movieSlice";
import { Movie_API_options } from "../utils/constant";


const useMovieTrailer = (movieId) => {
  const dispach = useDispatch();
  const fetchTrailer = async () => {
    const json = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      Movie_API_options
    );
    const movieData = await json.json();

    const trailerMovie = movieData.results.filter((item) => {
      return item?.type === "Trailer";
    });

    const officatTrailer = trailerMovie.filter(
      (item) => item.name === "Official Trailer"
    );
    let backGroundVideo = null;
    if (officatTrailer) {
      backGroundVideo = officatTrailer[0];
    } else if (trailerMovie) {
      backGroundVideo = trailerMovie[0];
    } else {
      backGroundVideo = movieData.results[0];
    }

    dispach(addTrailer(backGroundVideo));
  };


  useEffect(() => {
    fetchTrailer();
  }, []);
}

export default useMovieTrailer

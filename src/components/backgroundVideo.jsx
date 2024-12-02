import React from "react";
import useMovieTrailer from "../utils/useMovieTrailer";

import { useSelector } from "react-redux";

const backgroundVideo = ({ movieId }) => {
  const TrailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);

  return (
    <div  className="">
      <iframe className="w-screen aspect-video -mt-5"
        src={`https://www.youtube.com/embed/${TrailerVideo?.key}?si=CN45WlROlAaKyNgy&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default backgroundVideo;

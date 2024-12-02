import React, { useEffect } from "react";
import VideoTitle from "./videoTitle";
import BackgroundVideo from "./backgroundVideo";
import { useSelector } from "react-redux";

function mainBrowse() {



  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const { title, overview ,id} = movies.results[0];

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <BackgroundVideo movieId={id} />
    </div>
  );
}

export default mainBrowse;

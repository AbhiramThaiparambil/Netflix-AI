import React from "react";
import VideoTitle from "./videoTitle";
import BackgroundVideo from "./backgroundVideo";
import { useSelector } from "react-redux";
function mainBrowse() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(!movies) return 
  console.log(movies.results[0]);
 const{title,overview} = movies.results[0]
  return (
    <div >
      <VideoTitle title={title} overview={overview} />
      <BackgroundVideo />
    </div>
  );
}

export default mainBrowse;

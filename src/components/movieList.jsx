import React from "react";
import MovieCards from "./movieCards";
const MovieList = ({ title, movies }) => {

  return (
    <div>
    <div className="">
        <h1 className="text-white text-xl">{title}</h1>
        <div className=" flex overflow-x-scroll w-full">
          <div className="flex ">
            {movies?.results.map((movie) => {
              return <MovieCards key={movie.id} movie={movie} />;
            })}
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default MovieList;

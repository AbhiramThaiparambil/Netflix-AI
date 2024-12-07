import React from "react";
import MovieCards from "./movieCards";
import { TMDB_IMG_URL } from "../utils/constant";
const MovieSuggestionList = ({ movies }) => {
    console.log( movies);
    
   if (!movies) return null 
    return (
    
        
          <div className="m-3">
            {movies?.results.map((movie,i) => {
             return i ==0  ? 

             (
             
                <div className=" bg-white bg-opacity-30   p-5 rounded-lg shadow-lg">
                <div className="w-[220px] ml-4 mt-5 text-center">
                  <img
                    src={TMDB_IMG_URL + movie.poster_path}
                    alt={movie.title}
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  />
                  <h1 className="text-red  mt-3 text-lg font-semibold">
                    {movie.title}
                  </h1>
                </div>
              </div>
                
             ): " "

            })}
          </div>


    
  );
};

export default MovieSuggestionList;

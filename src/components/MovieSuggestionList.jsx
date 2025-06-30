
import { TMDB_IMG_URL } from "../utils/constant";
const MovieSuggestionList = ({ movies }) => {
    console.log( movies);
    
   if (!movies) return null 
    return (
    
        
          <div className="m-3">
            {movies?.results.map((movie,i) => {
             return i ==0  ? 

             (
             
                <div className="p-5 bg-white rounded-lg shadow-lg  bg-opacity-30">
                <div className="w-[220px] ml-4 mt-5 text-center">
                  <img
                    src={TMDB_IMG_URL + movie.poster_path}
                    alt={movie.title}
                    className="transition-transform duration-300 rounded-lg shadow-md hover:scale-105"
                  />
                  <h1 className="mt-3 text-lg font-semibold text-red">
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

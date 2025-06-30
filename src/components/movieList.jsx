import MovieCards from "./movieCards";
const MovieList = ({ title, movies }) => {

  return (
    <div>
    <div className="">
        <h1 className="text-xl text-white">{title}</h1>
        <div className="flex w-full overflow-x-scroll ">
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

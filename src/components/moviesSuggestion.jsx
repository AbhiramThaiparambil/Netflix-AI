
import MovieSuggestionList from "./MovieSuggestionList";
const moviesSuggestion = ({ movieNames, aiMovies }) => {
  if (!movieNames) return null;
  return (
    <div className="w-[900px] mx-auto flex flex-wrap  backdrop-blur-2xl  	 text-white">
      {movieNames.map((movie, i) => {
        return <MovieSuggestionList key={movie} movies={aiMovies[i]} />;
      })}
    </div>
  );
};

export default moviesSuggestion;

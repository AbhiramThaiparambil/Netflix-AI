import React, { useRef, useState ,useEffect} from "react";
import { language } from "../utils/constant";
import { model } from "../utils/geminiAi";
import searchMovie from "../utils/AisearchMovieFetch";
import MoviesSuggestion from "./moviesSuggestion";

const AiSearch = ({ lang }) => {
  const [aiMovies,setAimovies]=useState([]);
  const [movieNames,setMovieNames]=useState([])
  const { search, searchPlaceHolder } = language;
  const searchInp = useRef(null);
  const handileSumbit = async (e) => {
    e.preventDefault();


    const query =
      "I need some movie suggestions. Act like a movie recommendation system according to my query: " +
      searchInp.current.value +
      "The result must only include the top 5 movies in this format: 'movie1', movie2, movie3, movie4, movie5 ";

    const result = await model.generateContent([query]);

    const movieString = result.response.text();
    const movieArray = movieString
      .split(", ")
    setMovieNames(movieArray)
     const moviesResult = await searchMovie(movieArray)
     
     setAimovies(moviesResult)
        
        
  }; 

  useEffect(() => {
    console.log(aiMovies); // This will log whenever `aiMovies` updates
  }, [aiMovies]);
  return (
    <div>
    <div className=" w-1/2  p-5 mx-auto bg-black bg-opacity-60 rounded-sm flex">
      <form onSubmit={(e) => handileSumbit(e)}>
        <input
          className="border pl-3 border-black h-10  py-3 w-[580px]  rounded-lg"
          ref={searchInp}
          placeholder={searchPlaceHolder[lang]}
          type="text"
        />
        <button className="px-3  py-2 ml-5 rounded-lg text-white font-bold bg-red-700">
          {search[lang]}
        </button>
      </form>
    </div>
    <MoviesSuggestion movieNames={movieNames} aiMovies={aiMovies}/>

    </div>

  );
};

export default AiSearch;

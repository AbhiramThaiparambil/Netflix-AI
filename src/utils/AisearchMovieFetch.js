import { Movie_API_options } from "./constant"
const searchMovie = (movies) => {
    try {
  if(movies.length>0){ 
        const moviePromise = movies.map((movieName) => {
            return AisearchMovieTmdb(movieName)
        })

        const moviesResults = Promise.all(moviePromise)


        return moviesResults
        
}
    } catch (error) {

    }

}



const AisearchMovieTmdb = async (movieName) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`


    const json = await fetch(url, Movie_API_options)
    const movieResult = await json.json()
    return movieResult;
}


export default searchMovie

import React from 'react'
import MovieList from './movieList'
import { useSelector } from 'react-redux'
const SecondaryBrowse = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  return (
    <div>
       <MovieList title={"nowPlayingMovies"} movies={movies}/>
       {/* <MovieList title={"nowPlayingMovies"} movies={movies}/>
       <MovieList title={"nowPlayingMovies"} movies={movies}/>
       <MovieList title={"nowPlayingMovies"} movies={movies}/> */}
    </div>
  )
}

export default SecondaryBrowse

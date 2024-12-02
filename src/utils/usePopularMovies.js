import { useEffect } from 'react';
import {Movie_API_options} from './constant'
import { useDispatch } from 'react-redux';
import { addPopularMovies} from '../store/movieSlice';

function usePopularMovies(){ 
  const dispatch=useDispatch()
 async function fetchPopularMovies(){
   try{  

    const json=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', Movie_API_options)
    const popularMovies=await json.json()
    dispatch(addPopularMovies(popularMovies))
     
   }catch{

   }
}

useEffect(()=>{
  fetchPopularMovies() 
},[])
}
export default usePopularMovies;
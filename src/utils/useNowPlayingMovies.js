import { useEffect } from 'react';
import {Movie_API_options} from './constant'
import { useDispatch } from 'react-redux';
import { addNowplayingMovies } from '../store/movieSlice';

function useNowPlayingMovie(){ 
  const dispatch=useDispatch()
 async function fetchNowPlayingMovies(){
   try{  

    const json=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', Movie_API_options)
    const nowplayingMovies=await json.json()
    dispatch(addNowplayingMovies(nowplayingMovies))
     
   }catch{

   }
}

useEffect(()=>{
    fetchNowPlayingMovies() 
},[])
}
export default useNowPlayingMovie;
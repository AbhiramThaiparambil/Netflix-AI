import { useEffect } from 'react';
import { Movie_API_options } from './constant'
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../store/movieSlice';

function useTopRatedMovies() {
    const dispatch = useDispatch()
    async function fetchTopRatedMovies() {
        try {

            const json = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', Movie_API_options)
            const topRatedMovies = await json.json()
            dispatch(addTopRatedMovies(topRatedMovies))

        } catch {

        }
    }

    useEffect(() => {
        fetchTopRatedMovies()
    }, [])
}
export default useTopRatedMovies;
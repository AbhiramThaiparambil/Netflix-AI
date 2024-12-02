import React from 'react'
import MovieCards from './movieCards'
const MovieList = ({title,movies}) => {
    console.log(movies?.results);
    
  return (
  <div className='bg-black'>
       <div className='-mt-48 relative z-10 p-5'>
         <h1 className='text-white text-xl'>{title}</h1>  
    <div className='flex overflow-x-scroll'>
        
        <div className='flex '>
        {
            movies?.results.map((movie)=>{
                 return < MovieCards key={movie.id} movie={movie} />
            })
        }
        </div>
    </div>
    </div>
  </div>
    
  )
}

export default MovieList

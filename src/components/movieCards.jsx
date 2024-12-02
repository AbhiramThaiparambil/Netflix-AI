import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

const MovieCards = ({movie}) => {
    const {poster_path,original_title,overview,original_language}=movie
  return (
    <div className='w-52 ml-4 '>
       <img src={TMDB_IMG_URL+poster_path} alt="" />
    </div>
  )
}

export default MovieCards

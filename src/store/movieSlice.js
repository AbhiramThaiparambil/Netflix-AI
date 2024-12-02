import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowplayingMovies:(state,action)=>{
         state.nowPlayingMovies=action.payload;
        },
        addTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        }
    }
})

export const {addNowplayingMovies,addTrailer}=moviesSlice.actions;

export default moviesSlice.reducer;
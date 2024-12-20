import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowplayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailer: (state, action) => {
            state.movieTrailer = action.payload
        }, addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }, addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addNowplayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
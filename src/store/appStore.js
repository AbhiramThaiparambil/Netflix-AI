import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from'./movieSlice'
import ConfigSlice from "./ConfigSlice";

const appStore=configureStore({
    reducer:{
        movies:moviesReducer,
        Config:ConfigSlice
    }
})

export default appStore
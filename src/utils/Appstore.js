import { configureStore } from "@reduxjs/toolkit";
import userReducerSlice from "./userSlice";
import moviesPlaying from './movieNowPlayingSlice';
const appStore=configureStore(

    {
        reducer :{
           user:userReducerSlice,
           movies:moviesPlaying
        }
    }
)

export default appStore;
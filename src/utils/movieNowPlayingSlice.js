import { createSlice } from "@reduxjs/toolkit";


const movieNowPlayingSlice=createSlice({

    name: 'movies',
    initialState: {
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
    },
    reducers:{
      addNowPlayingMovies:(state,action)=>{
       state.nowPlayingMovies=action.payload;
      },
      addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
      },
      addPopularMovie:(state,action)=>{
        state.popularMovies=action.payload
      },

    }

})


export const {addNowPlayingMovies,addTrailerVideo,addPopularMovie}=movieNowPlayingSlice.actions;

export default movieNowPlayingSlice.reducer;
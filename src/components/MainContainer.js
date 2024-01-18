

import React from 'react'
import { useSelector } from 'react-redux';
import { VideoTitle } from './VideoTitle';
import { VideoBackround } from './VideoBackround';

export const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    console.log('movv'+movies)
    if (!movies) return;
    const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackround movieId={id} />
    </div>
  )
}

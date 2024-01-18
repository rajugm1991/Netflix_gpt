import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { MainContainer } from './MainContainer'
import { SecondaryContainer } from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <>
    <div>
      <div><Header/></div>
       
       <MainContainer/>
       <SecondaryContainer/>

    </div>
    </>
   
  )
}

export default Browse
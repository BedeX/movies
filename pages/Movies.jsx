import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'
import { getMovies } from '../utils'

export const Movies = () => {
  const [movies, setMovies] = useState(null)

  movies && console.log(movies)

  useEffect(() => {
    getMovies().then(setMovies)
  }, [])

  return (
    <div className='min-h-screen'>
      {movies ? <MediaList data={movies} type='movies'/> : <Loading/>}
    </div>
  )
}
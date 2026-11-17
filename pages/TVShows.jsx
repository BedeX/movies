import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Loading } from '../components/Loading'
import { MediaList } from '../components/MediaList'
import { getTVShows } from '../utils'

export const TVShows = () => {
  const [tvshows, setTvshows] = useState(null)

  tvshows && console.log(tvshows)

  useEffect(() => {
    getTVShows().then(setTvshows)
  }, [])

  return (
    <div className='min-h-screen'>
      {tvshows ? <MediaList data={tvshows} type='tv shows'/> : <Loading/>}
    </div>
  )
}
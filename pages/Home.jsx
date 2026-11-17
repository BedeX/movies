import React from 'react'
import { useState, useEffect } from 'react'
import { getTrendings, img_300 } from '../utils'

export const Home = () => {
  const [trendings, setTrendings] = useState(null)

  trendings && console.log(trendings)

  useEffect(() => {
    getTrendings().then(setTrendings)
  }, [])

  return (
    <div>{trendings && trendings.map(obj =>
      <img src={img_300 + obj.poster_path} alt='Kép' />)}
      </div>
  )
}
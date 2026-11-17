import React from 'react'
import { MediaCard } from './MediaCard'

export const MediaList = ({data,type}) => {
    return (
        //       <img src={img_300 + obj.poster_path} alt='Kép' />)}
        <div className='max-w-300 mt-5 flex flex-wrap gap-4 mx-auto'>
            {data && data.map(obj=><MediaCard key={obj.id} media={obj}/>)}
        </div>
    )
}

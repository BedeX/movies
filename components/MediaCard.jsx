import React from 'react'
import { img_300 } from '../utils'

export const MediaCard = ({ media }) => {
    return (
        <div className="card bg-gray-800 w-96 shadow-sm text-white">
            <figure>
                <img
                    src={img_300 + media.poster_path} alt={media.title || media.name} />
            </figure>
            <div className="card-body">
                <h1 className="flex-row justify-start card-title">{media.title || media.name}</h1>
                <h2 className='flex-row font-semibold justify-end'>{media.release_date}</h2>
                <p>{media.overview}</p>
                <div className="flex card-actions">
                    <h2 className='font-semibold justify-end'>{media.vote_average} / 10</h2>
                </div>
            </div>
        </div>
    )
}

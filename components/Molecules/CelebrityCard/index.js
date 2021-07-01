
import CarrouselRating from '../CarrouselRating'
import {useState} from 'react'

export default function CelebrityCard({celebrity, user}){
    const [rating, setRatting] = useState(celebrity.userRating)

    return (
    <div className='celebrity-card-container'>
          <img
            className='celebrity-card-image'
            src={celebrity.image}
        />
        <span className='celebrity-card-text'>{celebrity.name || 'ALGUN NOMBRE'}</span>
        <span className='celebrity-card-text'>{celebrity.type || 'ACTOR'}</span>
        <span className='celebrity-card-text'>{celebrity.age || '44'}</span>
        <CarrouselRating user={user} entityId={celebrity.id} entityType='celebrities'
            generalRatting={Math.round(celebrity.rating * 10) / 10}
            rating={rating} setRatting={setRatting}
        />
    </div>)
}

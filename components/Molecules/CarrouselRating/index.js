import RateButton from '../../Atoms/RateButton'
import Rating from '../../Atoms/Rating'
import Popup from '../Popup'
import StarsRate from '../StarsRate'
import {useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function CarrouselRating({user, entityId, generalRatting, entityType,
    t, rating, setRatting}){
    const { addToast } = useToasts()

    const handleOnRate = (points) => {
        const body = {
            rating: points,
            entityId: entityId,
            "type":entityType
        }
        hit(endpoints.RATINGS.POST.POST_RATING(), {t, body,toasts: {
            addToast, successMessage: 'PUNTUACION POSTEADA'
        }}).then(result => {
            if(result.status == 200){

            }
        })
    }

    return ( <div className='carrousel-rating-container'>
        {
            user && user.role != "NOT_USER" &&  <Popup
            info={{
                  title: 'POPUP_DELETE_USER_TITLE',
                  content: <StarsRate value={rating} setter={setRatting} />,
                }}
                type={'danger'}
                onClick={() => {
                    handleOnRate(rating)
                }}
                Button={({onClick}) => {
                    return <RateButton onClick={onClick} rating={rating} />
                }}
            />
        }
        <Rating rating={generalRatting} />
    </div>)
}

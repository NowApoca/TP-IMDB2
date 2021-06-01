import RateButton from '../../Atoms/RateButton'
import Rating from '../../Atoms/Rating'
import Popup from '../Popup'
import StarsRate from '../StarsRate'
import {useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function CarrouselRating({user, item_id, generalRatting,
    t, rating, setRatting}){
    const { addToast } = useToasts()

    const handleOnRate = (points) => {
        const body = {
            rating: points,
            item_id: item_id,
        }
        hit(endpoints.ITEMS.POST.POST_RATING(), {t, body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 200){

            }
        })
    }

    return ( <div className='carrousel-rating-container'>
        <Popup
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
        <Rating rating={generalRatting} />
    </div>)
}

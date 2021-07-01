import Bookmark from '../../Atoms/Bookmark'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import CarrouselRating from '../CarrouselRating'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'

export default function CarrouselItem({item, type, t, user}){


    const [rating, setRatting] = useState(item.userRating)

    const { addToast } = useToasts()

    const handleBookMark = (id) => {
        const body = {
            id,
        }
        hit(endpoints.ITEMS.POST.ADD_WATCH_LIST(), {body,toasts: {
            addToast, successMessage: 'AGREGADO A LA WATCHLIST'
        }}).then(result => {
            if(result.status == 204){
                setIsBookMarked(!isBookmarked)
            }
        })
    }

    return (
        <div className='carrousel-item-container'>
            {
                type != 'users' && user && user.role != 'NOT_USER' && <Bookmark user={user} isBookmarked={item.isBookmarked} idItem={item.id} />
            }
            <img onClick={() => {
                window.location = `/title/${item.id}`
            }}
                className='carrousel-item-image'
                src={item.image}
            />
            {
                type != 'users' && <CarrouselRating entityType='items' user={user} entityId={item.id}
                    generalRatting={Math.round(item.rating * 10) / 10}
                    rating={rating} setRatting={setRatting}
                />
            }
            <span className='carrousel-item-title'>
                <a href={`/title/${item.id }`}>
                    {item.title }
                </a>
            </span>
        </div>
    )
}

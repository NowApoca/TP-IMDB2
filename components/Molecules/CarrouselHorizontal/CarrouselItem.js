import Bookmark from '@material-ui/icons/Bookmark'
import Rating from '../../Atoms/Rating'
import RateButton from '../../Atoms/RateButton'
import CarrouselRating from '../CarrouselRating'

export default function CarrouselItem({item, type}){
    return (
        <div className='carrousel-item-container'>
            {
                type != 'users' && <Bookmark
                className='carrousel-item-bookmark' />
            }
            <img
                className='carrousel-item-image'
                src={item.image}
            />
            {
                type != 'users' && <CarrouselRating />
            }
            <span className='carrousel-item-title'>
                {item.title}
            </span>
        </div>
    )
}

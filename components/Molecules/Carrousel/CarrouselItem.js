import CarrouselItem from './CarrouselItem'
import Bookmark from '@material-ui/icons/Bookmark'
import Rating from '../../Atoms/Rating'
import RateButton from '../../Atoms/RateButton'
import CarrouselRating from '../../Molecules/CarrouselRating'

export default function Carrousel({item}){
    return (
        <div className='carrousel-item-container'>
            <Bookmark className='carrousel-item-bookmark' />
            <img
                className='carrousel-item-image'
                src={item.image}
            />
            <CarrouselRating />
            <span className='carrousel-item-title'>
                {item.title}
            </span>
        </div>
    )
}

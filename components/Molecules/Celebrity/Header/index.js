import Rating from '../../../Atoms/Rating'
import Moment from '../../../Atoms/Moment'

export default function Header({data = {}}){
    return (
        <div className='celebrity-header-container'>
            <img 
                className='celebrity-header-img'
                src={'../' + data.image}
            />
            <div className='celebrity-header-text'>
                <span className='celebrity-header-text-celebrity'>
                    {`${data.name || 'ALGUN'} ${data.surname || 'ALGUN'} `}
                </span>
                <div className='celebrity-header-text-rating'>
                    <Rating rating={data.rating} />
                </div>
                <span className='celebrity-header-text-subtitle'>
                    {`${'GENEROS'}: ${data.genres.map(genre => genre)}`}
                </span>
            </div>
        </div>
    )
}
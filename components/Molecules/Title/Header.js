import Rating from '../../Atoms/Rating'
import Bookmark from '../../Atoms/Bookmark'

export default function TitleHeader({data = {}}){
    return (
        <div className='title-header-container'>
            <div className='title-header-img-container'>
                <Bookmark isBookmarked={data.isBookmarked} idItem={data.id} />
                <img 
                    className='title-header-img'
                    src={'../' + data.image} />

            </div>


            <div className='title-header-text'>
                <span className='title-header-text-title'>
                    {`${data.id || 'ALGUN TITULO'} (${data.year || '1999'})`}
                </span>
                <div className='title-header-text-rating'>
                    <Rating rating={data.rating} />
                </div>
                <span className='title-header-text-subtitle'>
                    {data.subtitle || 'ALGUN TITULO'}
                </span>
            </div>
        </div>
    )
}
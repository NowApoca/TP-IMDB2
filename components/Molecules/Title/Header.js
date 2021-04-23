import Rating from '../../Atoms/Rating'

export default function TitleHeader({data = {}}){
    return (
        <div className='title-header-container'>
            <img 
                className='title-header-img'
                src='../logo.png'
            />
            <div className='title-header-text'>
                <span className='title-header-text-title'>
                    {`${data.title || 'ALGUN TITULO'} (${data.year || '1999'})`}
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
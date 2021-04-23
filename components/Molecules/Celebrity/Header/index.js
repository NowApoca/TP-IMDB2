import Rating from '../../../Atoms/Rating'

export default function Header({data = {}}){
    return (
        <div className='title-header-container'>
            <img 
                className='title-header-img'
                src='../logo.png'
            />
            <div className='title-header-text'>
                <span className='title-header-text-title'>
                    {`${data.name || 'ALGUN'} ${data.surname || 'ALGUN'} (${data.bornDate || '1999'})`}
                </span>
                <div className='title-header-text-rating'>
                    <Rating rating={data.rating} />
                </div>
                <span className='title-header-text-subtitle'>
                    {`${'GENEROS'}: ${data.genres.map(genre => genre)}`}
                </span>
            </div>
        </div>
    )
}
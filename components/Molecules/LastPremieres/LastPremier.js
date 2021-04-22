



export default function LastPremier({premiere = {}}){
    return (
        <div className='last-premiere-container'>
            <img
                className='last-premier-main-foto'
                src='./logo.png'
            />
            <div className='last-premier-movie-banner'>
                <span className='last-premier-movie-title'>
                    {premiere.title || 'ALGUN TITULO'}
                </span>
                <span className='last-premier-movie-sub-title'>
                    {premiere.subtitle || 'ALGUN TITULO'}
                </span>
            </div>
        </div>
    )
}
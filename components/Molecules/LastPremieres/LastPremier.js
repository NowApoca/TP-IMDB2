



export default function LastPremier({premiere = {}}){
    return (
        <div className='last-premiere-container'>
            <img onClick={() => {
                    window.location = `/title/${premiere.id}`
                }}
                className='last-premier-main-foto'
                src={premiere.image}
            />
            <div className='last-premier-movie-banner'>
                <span className='last-premier-movie-title'>
                    <a href={`/title/${premiere.id}`}>
                        {premiere.title || 'ALGUN TITULO'}
                    </a>
                </span>
                <span className='last-premier-movie-sub-title'>
                    {premiere.subtitle || 'ALGUN TITULO'}
                </span>
            </div>
        </div>
    )
}




export default function SmallPremier({premiere}){
    return (
        <div className='small-premiere-container'>
            <img onClick={() => {
                window.location = `/title/${premiere.id}`
            }}
                className='small-premier-image'
                src={premiere.image}
            />
            <div className='small-premier-data-container'>
                <span className='small-premier-title'>
                    <a href={`/title/${premiere.id}`}>
                        {premiere.title || 'ALGUN TITULO'}
                    </a>
                </span>
                <span className='small-premier-text'>
                    {premiere.subtitle || 'ALGUN TEXTO'}
                </span>
            </div>
                
                
                

        </div>
    )
}
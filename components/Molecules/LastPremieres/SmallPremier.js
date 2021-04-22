



export default function SmallPremier({premiere}){
    return (
        <div className='small-premiere-container'>
            <img
                className='small-premier-image'
                src='./logo.png'
            />
            <div className='small-premier-data-container'>
                <span className='small-premier-title'>
                    {premiere.title || 'ALGUN TITULO'}
                </span>
                <span className='small-premier-text'>
                    {premiere.title || 'ALGUN TEXTO'}
                </span>
            </div>
                
                
                

        </div>
    )
}
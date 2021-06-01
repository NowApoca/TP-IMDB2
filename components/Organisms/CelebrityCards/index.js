import CelebrityCard from '../../Molecules/CelebrityCard'
import Loader from '../../Molecules/CelebrityCard/Loader'

export default function CelebrityCards({celebrities = []}){
    if(celebrities == null) celebrities = []
    let newArrCelebrities = celebrities.concat([])
    if(celebrities){
        newArrCelebrities = newArrCelebrities.splice(0, 4)
    }

    return (
        <div className='celebrities-container'>
            {
                celebrities?
                newArrCelebrities.map(celebrity => {
                    return <div className='celebrities-item-container'>
                        <CelebrityCard celebrity={celebrity} />
                    </div>
                }) : <>
                    <Loader amount={3} className='celebrities-item-load-container' />
                    
                </>

            }
        </div>
    )
}

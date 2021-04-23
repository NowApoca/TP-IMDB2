import CelebrityCard from '../../Molecules/CelebrityCard'

export default function CelebrityCards({celebrities}){
    let newArrCelebrities = celebrities.concat([])
    newArrCelebrities = newArrCelebrities.splice(0, 4)
    return (
        <div className='celebrities-container'>
            {
                newArrCelebrities.map(celebrity => {
                    return <div className='celebrities-item-container'>
                        <CelebrityCard celebrity={celebrity} />
                    </div>
                })
            }
        </div>
    )
}

import LastPremier from './LastPremier'
import SmallPremier from './SmallPremier'
import LoadLastPremier from './LoadLastPremier'
import LoadSmallPremier from './SmallPremierLoad'

export default function LastPremieres({
    lastPremieres}){

    let newArrayLastPremieres = lastPremieres.concat([])
    newArrayLastPremieres = newArrayLastPremieres.splice(0, 4)
    const lastPremier = newArrayLastPremieres.splice(0, 1)


    return (
        <div className='premiers-container'>
            <div className='premiers-last-container'>
                {
                    lastPremier?
                    <LastPremier premiere={lastPremier[0]} />
                    :
                    <LoadLastPremier />
                }
                
            </div>
            <div className='premiers-smalls-container'>
                {
                    lastPremieres ?
                        newArrayLastPremieres.map(premiere => {
                            return <SmallPremier premiere={premiere} />
                        })
                    :
                    <LoadSmallPremier amount={3} />
                    
                }
            </div>
            
        </div>
    )
}

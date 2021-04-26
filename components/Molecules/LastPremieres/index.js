import LastPremier from './LastPremier'
import SmallPremier from './SmallPremier'
import LoadLastPremier from './LoadLastPremier'
import LoadSmallPremier from './SmallPremierLoad'

export default function LastPremieres({
    lastPremieres}){

    const newArrayLastPremieres = lastPremieres.concat([])
    const lastPremier = newArrayLastPremieres.splice(0, 1)


    return (
        <div className='premiers-container'>
            <div className='premiers-last-container'>
                {
                    lastPremier?
                    <LastPremier lastPremier={lastPremier} />
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

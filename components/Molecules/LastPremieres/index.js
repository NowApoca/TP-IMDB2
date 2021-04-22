import LastPremier from './LastPremier'
import SmallPremier from './SmallPremier'

export default function LastPremieres({
    lastPremieres}){

    const newArrayLastPremieres = lastPremieres.concat([])
    const lastPremier = newArrayLastPremieres.splice(0, 1)


    return (
        <div className='premiers-container'>
            <div className='premiers-last-container'>
                <LastPremier lastPremier={lastPremier} />
            </div>
            <div className='premiers-smalls-container'>
                {
                    newArrayLastPremieres.map(premiere => {
                        return <SmallPremier premiere={premiere} />
                    })
                }
            </div>
            
        </div>
    )
}

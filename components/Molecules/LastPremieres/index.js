

export default function LastPremieres({
    lastPremieres}){

    const newArrayLastPremieres = lastPremieres.concat([])
    const lastPremier = newArrayLastPremieres.splice(0, 1)


    return (
        <div>
            <LastPremier lastPremier={lastPremier} />
            {
                newArrayLastPremieres.map(premiere => {
                    return <SmallPremier premiere={premiere} />
                })
            }
        </div>
    )
}

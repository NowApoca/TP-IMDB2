import CarrouselItem from './CarrouselItem'
import Loader from './CarrouselLoader'

export default function CarrouselHorizontal({items, entityType, type, user}){
    return (
        <div className='horizontal-carrousel-container'>
            {
                items && items.map(item => {
                    return <CarrouselItem entityType={entityType} user={user} type={type} item={item} />
                })
            }
            {
                !items && <div style={{height: '15rem'}}>
                    <Loader amount={5} />
                </div>
            }
        </div>
    )
}

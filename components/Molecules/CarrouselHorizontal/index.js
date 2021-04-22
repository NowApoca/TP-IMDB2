import CarrouselItem from './CarrouselItem'

export default function CarrouselHorizontal({items}){
    return (
        <div className='horizontal-carrousel-container'>
            {
                items.map(item => {
                    return <CarrouselItem item={item} />
                })
            }
        </div>
    )
}

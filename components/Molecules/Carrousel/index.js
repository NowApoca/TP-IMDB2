import CarrouselItem from './CarrouselItem'

export default function Carrousel({items}){
    return (
        <div>
            {
                items.map(item => {
                    return <CarrouselItem item={item} />
                })
            }
        </div>
    )
}

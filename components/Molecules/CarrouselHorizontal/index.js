import CarrouselItem from './CarrouselItem'
import Loader from './CarrouselLoader'

export default function CarrouselHorizontal({items, type, user}){
    console.log(user, 'ACA NO DEBO LLEGAR 2')
    return (
        <div className='horizontal-carrousel-container'>
            {
                items && items.map(item => {
                    return <CarrouselItem user={user} type={type} item={item} />
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

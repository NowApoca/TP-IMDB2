import Banner from '../../Atoms/Banner'
import CarrouselHorizontal from '../CarrouselHorizontal'

export default function FilterSearchResult({data, label, type, user}){
    return (<div>
        <Banner text={label} size={'title'} />
        {
            data.length == 0?
                <span>{'NO SE HAN ENCONTRADO RESULTADOS'}</span>
            :
            <CarrouselHorizontal user={user} type={type} items={data} />
        }
    </div>)
}
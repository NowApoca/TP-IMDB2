import Banner from '../../Atoms/Banner'
import CarrouselHorizontal from '../CarrouselHorizontal'

export default function FilterSearchResult({data, label, type}){
    return (<div>
        <Banner text={label} size={'title'} />
        {
            data.length == 0?
                <span>{'NO SE HAN ENCONTRADO RESULTADOS'}</span>
            :
            <CarrouselHorizontal type={type} items={data} />
        }
    </div>)
}
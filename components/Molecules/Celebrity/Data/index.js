import Banner from '../../../Atoms/Banner'
import Moment from '../../../Atoms/Moment'

export default function Data({data}){
    return (
        <div className='general-data-container'>
            <Banner text='DETAILS' size='title' />
            <span className='general-data-text'>
                {`${'Pais natal'}: ${data.country}`}
            </span>
            <span className='general-data-text'>
                {`${'Idioma'}: ${data.language}`}
            </span>
            <span className='general-data-text'>
                {`${'Fecha de Nacimiento'}: `} <Moment date={data.bornDate} />
            </span>
            <span className='general-data-text'>
                {`${'Biografia'}: ${data.biography}`}
            </span>
        </div>
    )
}
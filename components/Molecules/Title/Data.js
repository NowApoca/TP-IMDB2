import Banner from '../../Atoms/Banner'
import Moment from '../../Atoms/Moment'

export default function TitleData({data = {}}){
    return (
        <div className='general-data-container'>
        <Banner text='RESUMEN' size='title' />
            <span className='general-data-text'>{`${data.summary}`}</span>
            <Banner text='GENTE INVOLUCRADA' size='title' />
            <span className='general-data-text'>{`${'Director'}: ${data.director}`}</span>
            <span className='general-data-text'>{`${'Productor'}: ${data.productor}`}</span>
            <span className='general-data-text'>{`${'Escritores'}: ${data.writers.split(',').map(
                writer => ` ${writer}`
            )}`}</span>
            <span className='general-data-text'>{`${'Estrellas'}: ${data.stars.split(',').map(
                star => ` ${star}`
            )}`}</span>
            <Banner text='DETALLES' size='title' />
            <span className='general-data-text'>{`${'Pais de produccion'}: ${data.productorCountry}`}</span>
            <span className='general-data-text'>{`${'Idioma'}: ${data.language}`}</span>
            <span className='general-data-text'>{`${'Fecha de Estreno'}: `} {data.releaseDate} </span>
            <span className='general-data-text'>{`${'Duracion'}: ${data.duration}`}</span>
            <span className='general-data-text'>{`${'Genero'}: ${data.genre}`}</span>
            <span className='general-data-text'>{`${'Presupuesto'}: ${data.budget}`}</span>
            <span className='general-data-text'>{`${'Ganancia'}: ${data.earns}`}</span>
        </div>
    )
}
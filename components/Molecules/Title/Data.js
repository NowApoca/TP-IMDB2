import Banner from '../../Atoms/Banner'

export default function TitleData({data = {}}){
    return (
        <div className='title-data-container'>
            <Banner text='PEOPLE' size='title' />
            <span className='title-data-text'>{`${'Resumen'}: ${data.summary}`}</span>
            <span className='title-data-text'>{`${'Director'}: ${data.director}`}</span>
            <span className='title-data-text'>{`${'Productor'}: ${data.productor}`}</span>
            <span className='title-data-text'>{`${'Escritores'}: ${data.writers.map(
                writer => writer
            )}`}</span>
            <span className='title-data-text'>{`${'Estrellas'}: ${data.stars.map(
                writer => writer
            )}`}</span>
            <Banner text='DETAILS' size='title' />
            <span className='title-data-text'>{`${'Pais de produccion'}: ${data.productorCountry}`}</span>
            <span className='title-data-text'>{`${'Idioma'}: ${data.language}`}</span>
            <span className='title-data-text'>{`${'Fecha de Estreno'}: ${data.releaseDate}`}</span>
            <span className='title-data-text'>{`${'Duracion'}: ${data.duration}`}</span>
            <span className='title-data-text'>{`${'Genero'}: ${data.genre}`}</span>
            <span className='title-data-text'>{`${'Presupuesto'}: ${data.budget}`}</span>
            <span className='title-data-text'>{`${'Ganancia'}: ${data.earns}`}</span>
        </div>
    )
}
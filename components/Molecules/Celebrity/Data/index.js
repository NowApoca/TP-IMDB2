import Banner from '../../../Atoms/Banner'

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
                {`${'Fecha de Nacimiento'}: ${data.bornDate}`}
            </span>
            <span className='general-data-text'>
                {`${'Biografia'}: ${data.biography}`}
            </span>
        </div>
    )
}
import Button from '../../Atoms/Button'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import CastPut from '../../Molecules/Title/CastPut'
import RelatedMoviesPut from '../../Molecules/RelatedMovies/Put'

export default function UploadItem({celebrityData, user}){
    const { addToast } = useToasts()
    
    const [name, setName] = useState(celebrityData.data.name)
    const [image, setImage] = useState(celebrityData.data.image)
    const [surname, setSurname] = useState(celebrityData.data.surname)
    const [country, setCountry] = useState(celebrityData.data.country)
    const [language, setLanguage] = useState(celebrityData.data.language)
    const [biography, setBiography] = useState(celebrityData.data.biography)
    const [bornDate, setBornDate] = useState(celebrityData.data.bornDate)
    const [genres, setGenres] = useState(celebrityData.data.genres)

    const [cast, setCast] = useState(celebrityData.relatedStars.map(cele => {
        return {
            celebrityId: cele.celebrity.id,
            name: `${cele.celebrity.surname} ${cele.celebrity.name}`
        }
    }))
    const [relatedMovies, setRelatedMovies] = useState(celebrityData.relatedMovies.map(item => {
        return {
            itemId: item.item.id,
            name: `${item.item.title}`
        }
    }))

    const handlePostItem = () => {
        const body = {
            name,
            image,
            surname,
            country,
            language,
            biography,
            bornDate,
            genres,
        }
        hit(endpoints.CELEBRITIES.PUT.CELEBRITY(celebrityData.data.id), {body,toasts: {
            addToast, successMessage: 'CELEBRIDAD EDITADA'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/administration/update/celebrity/' + celebrityData.data.id
            }
        })
    }

    return (<div className='upload-celebrity-container'>
    
    
        <span className='upload-celebrity-text'>NOMBRE</span>
        <input type='text' value={name} onInput={e => {
            setName(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>APELLIDO</span>
        <input type='text' value={surname} onInput={e => {
            setSurname(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>IMAGEN</span>
        <input type='text' value={image} onInput={e => {
            setImage(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />

        {
            image && <span className='upload-celebrity-text'>LA IMAGEN CORRESPONDIENTE ES: </span>
        }
        {
            image && <img className='upload-item-administration-image' src={image} ></img>
        }
        
        <span className='upload-celebrity-text'>PAIS</span>
        <input type='text' value={country} onInput={e => {
            setCountry(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>IDIOMA</span>
        <input type='text' value={language} onInput={e => {
            setLanguage(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Biografia</span>
        <input type='text' value={biography} onInput={e => {
            setBiography(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Fecha de nacimiento</span>
        <input type='text' value={bornDate} onInput={e => {
            setBornDate(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>GENEROS DE ACTUACION</span>
        <input type='text' value={genres} onInput={e => {
            setGenres(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />

    <div className='update-cast-movie-container'>

        <Button 
            text='+ AGREGAR ACTOR RELACIONADO'
            onClick={() => {
                const castCopied = [].concat(cast)
                castCopied.push({})
                setCast(castCopied)
            }}
            variant='success'
            className='upload-celebrity-button'
        />

        
        <CastPut entityType='celebrities' entityId={celebrityData.data.id} data={cast} setCast={setCast} />
        </div>

        <div className='update-cast-movie-container'>
            

        <Button 
            text='+ AGREGAR PELICULA O SERIE RELACIONADA'
            onClick={() => {
                const movieCopied = [].concat(relatedMovies)
                movieCopied.push({})
                setRelatedMovies(movieCopied)
            }}
            variant='success'
            className='upload-celebrity-button'
        />

        <RelatedMoviesPut setRelatedMovies={setRelatedMovies} entityType='celebrities' entityId={celebrityData.data.id} data={relatedMovies} />
        </div>

        <Button 
            text='Guardar Cambios'
            onClick ={handlePostItem}
            variant='primary'
            className='upload-celebrity-button'
        />
    </div>)
}

import Button from '../../Atoms/Button'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import CastPut from '../../Molecules/Title/CastPut'
import RelatedMoviesPut from '../../Molecules/RelatedMovies/Put'

export default function UploadItem({itemData, user}){
    const { addToast } = useToasts()

    const [title, setTitle] = useState(itemData.data.title)
    const [image, setImage] = useState(itemData.data.image)
    const [subtitle, setSubtitle] = useState(itemData.data.subtitle)
    const [year, setYear] = useState(itemData.data.year)
    const [summary, setSummary] = useState(itemData.data.summary)
    const [director, setDirector] = useState(itemData.data.director)
    const [productor, setProductor] = useState(itemData.data.productor)
    const [writers, setWriters] = useState(itemData.data.writers)
    const [stars, setStars] = useState(itemData.data.stars)
    const [productorCountry, setProductorCountry] = useState(itemData.data.productorCountry)
    const [language, setLanguage] = useState(itemData.data.language)
    const [releaseDate, setReleaseDate] = useState(itemData.data.releaseDate)
    const [duration, setDuration] = useState(itemData.data.duration)
    const [genre, setGenre] = useState(itemData.data.genre)
    const [budget, setBudget] = useState(itemData.data.budget)
    const [earns, setEarns] = useState(itemData.data.earns)
    
    const [cast, setCast] = useState(itemData.cast.map(cele => {
        return {
            celebrityId: cele.celebrity.id,
            name: `${cele.celebrity.surname} ${cele.celebrity.name}`
        }
    }))
    const [relatedMovies, setRelatedMovies] = useState(itemData.relatedMovies.map(item => {
        return {
            itemId: item.item.id,
            name: `${item.item.title}`
        }
    }))

    const handlePostItem = () => {
        const body = {
            title,
            image,
            subtitle,
            year,
            summary,
            director,
            productor,
            writers,
            stars,
            productorCountry,
            language,
            releaseDate,
            duration,
            genre,
            budget,
            earns,
        }
        hit(endpoints.ITEMS.PUT.ITEM(itemData.data.id), {body,toasts: {
            addToast, successMessage: 'PELICULA O SERIE EDITADA'
        }}).then(result => {
            if(result.status == 204){
                window.location = '/administration/update/item/' + itemData.data.id
            }
        })
    }

    return (<div className='upload-celebrity-container'>
    
    <span className='upload-celebrity-text'>TITULO</span>
        <input type='text' value={title} onInput={e => {
            setTitle(e.target.value)
        }} className='upload-celebrity-input' placeholder='Titulo' />
    
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
    
        <span className='upload-celebrity-text'>SUBTITULO</span>
        <input type='text' value={subtitle} onInput={e => {
            setSubtitle(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>ANIO</span>
        <input type='number' value={year} onInput={e => {
            setYear(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>RESUMEN</span>
        <input type='text' value={summary} onInput={e => {
            setSummary(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>DIRECTOR</span>
        <input type='text' value={director} onInput={e => {
            setDirector(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Productor</span>
        <input type='text' value={productor} onInput={e => {
            setProductor(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Escritores o guionistas</span>
        <input type='text' value={writers} onInput={e => {
            setWriters(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Actores</span>
        <input type='text' value={stars} onInput={e => {
            setStars(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Pais de origen</span>
        <input type='text' value={productorCountry} onInput={e => {
            setProductorCountry(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Idioma</span>
        <input type='text' value={language} onInput={e => {
            setLanguage(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Fecha de estreno</span>
        <input type='text' value={releaseDate} onInput={e => {
            setReleaseDate(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Duracion</span>
        <input type='number' value={duration} onInput={e => {
            setDuration(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Genero</span>
        <input type='text' value={genre} onInput={e => {
            setGenre(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Presupuesto</span>
        <input type='text' value={budget} onInput={e => {
            setBudget(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />
    
        <span className='upload-celebrity-text'>Ganancias</span>
        <input type='text' value={earns} onInput={e => {
            setEarns(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />

<div className='update-cast-movie-container'>
        <Button 
            text='+ AGREGAR PELICULA O SERIE RELACIONADA'
            onClick={() => {
                const castCopied = [].concat(cast)
                castCopied.push({})
                setCast(castCopied)
            }}
            variant='success'
            className='upload-celebrity-button'
        />
        <CastPut entityType='items' entityId={itemData.data.id} data={cast} setCast={setCast} />
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
        <RelatedMoviesPut setRelatedMovies={setRelatedMovies} entityType='items' entityId={itemData.data.id} data={relatedMovies} />
        </div>
        <Button 
            text='Guardar cambios'
            onClick ={handlePostItem}
            variant='primary'
            className='upload-celebrity-button'
        />
    </div>)
}

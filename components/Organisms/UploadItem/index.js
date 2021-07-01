import Button from '../../Atoms/Button'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

export default function UploadItem(){
    const { addToast } = useToasts()

    const [title, setTitle] = useState()
    const [image, setImage] = useState()
    const [subtitle, setSubtitle] = useState()
    const [year, setYear] = useState()
    const [summary, setSummary] = useState()
    const [director, setDirector] = useState()
    const [productor, setProductor] = useState()
    const [writers, setWriters] = useState()
    const [stars, setStars] = useState()
    const [productorCountry, setProductorCountry] = useState()
    const [language, setLanguage] = useState()
    const [releaseDate, setReleaseDate] = useState()
    const [duration, setDuration] = useState()
    const [genre, setGenre] = useState()
    const [budget, setBudget] = useState()
    const [earns, setEarns] = useState()

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
        hit(endpoints.ITEMS.POST.ITEM(), {body,toasts: {
            addToast, successMessage: 'ITEM CREADO'
        }}).then(result => {
            if(result.status == 201){
                window.location = '/administration/items'
            }
        })
    }

    return (<div className='upload-celebrity-container'>
    
        <span className='upload-celebrity-text'>TITULO</span>
        <input type='text' value={title} onInput={e => {
            setTitle(e.target.value)
        }} className='upload-celebrity-input' placeholder='TITULO' />
    
        <span className='upload-celebrity-text'>IMAGEN</span>
        <input type='text' value={image} onInput={e => {
            setImage(e.target.value)
        }} className='upload-celebrity-input' placeholder='IMAGEN' />

        {
            image && <span className='upload-celebrity-text'>LA IMAGEN CORRESPONDIENTE ES: </span>
        }
        {
            image && <img className='upload-item-administration-image' src={image} ></img>
        }
    
        <span className='upload-celebrity-text'>SUBTITULO</span>
        <input type='text' value={subtitle} onInput={e => {
            setSubtitle(e.target.value)
        }} className='upload-celebrity-input' placeholder='SUBTITULO' />
    
        <span className='upload-celebrity-text'>Año</span>
        <input type='number' value={year} onInput={e => {
            setYear(e.target.value)
        }} className='upload-celebrity-input' placeholder='Año' />
    
        <span className='upload-celebrity-text'>RESUMEN</span>
        <input type='text' value={summary} onInput={e => {
            setSummary(e.target.value)
        }} className='upload-celebrity-input' placeholder='RESUMEN' />
    
        <span className='upload-celebrity-text'>DIRECTOR</span>
        <input type='text' value={director} onInput={e => {
            setDirector(e.target.value)
        }} className='upload-celebrity-input' placeholder='DIRECTOR' />
    
        <span className='upload-celebrity-text'>Productor</span>
        <input type='text' value={productor} onInput={e => {
            setProductor(e.target.value)
        }} className='upload-celebrity-input' placeholder='Productor' />
    
        <span className='upload-celebrity-text'>Escritores o guionistas</span>
        <input type='text' value={writers} onInput={e => {
            setWriters(e.target.value)
        }} className='upload-celebrity-input' placeholder='Escritores o guionistas' />
    
        <span className='upload-celebrity-text'>Actores</span>
        <input type='text' value={stars} onInput={e => {
            setStars(e.target.value)
        }} className='upload-celebrity-input' placeholder='Actores' />
    
        <span className='upload-celebrity-text'>Pais de origen</span>
        <input type='text' value={productorCountry} onInput={e => {
            setProductorCountry(e.target.value)
        }} className='upload-celebrity-input' placeholder='Pais de origen' />
    
        <span className='upload-celebrity-text'>Idioma</span>
        <input type='text' value={language} onInput={e => {
            setLanguage(e.target.value)
        }} className='upload-celebrity-input' placeholder='Idioma' />
    
        <span className='upload-celebrity-text'>Fecha de estreno</span>
        <input type='text' value={releaseDate} onInput={e => {
            setReleaseDate(e.target.value)
        }} className='upload-celebrity-input' placeholder='Fecha de estreno' />
    
        <span className='upload-celebrity-text'>Duracion</span>
        <input type='number' value={duration} onInput={e => {
            setDuration(e.target.value)
        }} className='upload-celebrity-input' placeholder='Duracion' />
    
        <span className='upload-celebrity-text'>Genero</span>
        <input type='text' value={genre} onInput={e => {
            setGenre(e.target.value)
        }} className='upload-celebrity-input' placeholder='Genero' />
    
        <span className='upload-celebrity-text'>Presupuesto</span>
        <input type='text' value={budget} onInput={e => {
            setBudget(e.target.value)
        }} className='upload-celebrity-input' placeholder='Presupuesto' />
    
        <span className='upload-celebrity-text'>Ganancias</span>
        <input type='text' value={earns} onInput={e => {
            setEarns(e.target.value)
        }} className='upload-celebrity-input' placeholder='Ganancias' />

        <Button 
            text='Crear pelicula o serie'
            onClick ={handlePostItem}
            variant='success'
            className='upload-celebrity-button'
        />
    </div>)
}

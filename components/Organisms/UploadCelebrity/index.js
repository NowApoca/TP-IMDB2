import Button from '../../Atoms/Button'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import CastPut from '../../Molecules/Title/CastPut'
import RelatedMoviesPut from '../../Molecules/RelatedMovies/Put'

export default function UploadItem({ user}){
    const { addToast } = useToasts()
    
    const [name, setName] = useState()
    const [image, setImage] = useState()
    const [surname, setSurname] = useState()
    const [country, setCountry] = useState()
    const [language, setLanguage] = useState()
    const [biography, setBiography] = useState()
    const [bornDate, setBornDate] = useState()
    const [genres, setGenres] = useState() 

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
        hit(endpoints.CELEBRITIES.POST.CELEBRITY(), {body,toasts: {
            addToast, successMessage: 'CELEBRIDAD CREADA'
        }}).then(result => {
            if(result.status == 201){
                window.location = '/administration/celebrities'
            }
        })
    }

    return (<div className='upload-celebrity-container'>
    
    
        <span className='upload-celebrity-text'>NOMBRE</span>
        <input type='text' value={name} onInput={e => {
            setName(e.target.value)
        }} className='upload-celebrity-input' placeholder='NOMBRE' />
    
        <span className='upload-celebrity-text'>APELLIDO</span>
        <input type='text' value={surname} onInput={e => {
            setSurname(e.target.value)
        }} className='upload-celebrity-input' placeholder='APELLIDO' />
    
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
        
        <span className='upload-celebrity-text'>PAIS</span>
        <input type='text' value={country} onInput={e => {
            setCountry(e.target.value)
        }} className='upload-celebrity-input' placeholder='PAIS' />
    
        <span className='upload-celebrity-text'>IDIOMA</span>
        <input type='text' value={language} onInput={e => {
            setLanguage(e.target.value)
        }} className='upload-celebrity-input' placeholder='IDIOMA' />
    
        <span className='upload-celebrity-text'>Biografia</span>
        <input type='text' value={biography} onInput={e => {
            setBiography(e.target.value)
        }} className='upload-celebrity-input' placeholder='Biografia' />
    
        <span className='upload-celebrity-text'>Fecha de nacimiento</span>
        <input type='text' value={bornDate} onInput={e => {
            setBornDate(e.target.value)
        }} className='upload-celebrity-input' placeholder='Fecha de nacimiento' />
    
        <span className='upload-celebrity-text'>GENEROS DE ACTUACION</span>
        <input type='text' value={genres} onInput={e => {
            setGenres(e.target.value)
        }} className='upload-celebrity-input' placeholder='GENEROS DE ACTUACION' />

        <Button 
            text='Crear celebridad'
            onClick ={handlePostItem}
            variant='success'
            className='upload-celebrity-button'
        />
    </div>)
}

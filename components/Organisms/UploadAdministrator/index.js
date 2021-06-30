import Button from '../../Atoms/Button'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

export default function UploadItem(){
    const { addToast } = useToasts()
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    const handlePostItem = () => {
        const body = {
            userName: user,
            password
        }
        hit(endpoints.USERS.POST.ADMINISTRATOR(), {body,toasts: {
            addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
        }}).then(result => {
            if(result.status == 201){
                window.location = '/administration/items'
            }
        })
    }

    return (<div className='upload-celebrity-container'>
    
        <span className='upload-celebrity-text'>USUARIO</span>
        <input value={user} onInput={e => {
            setUser(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />

        <span className='upload-celebrity-text'>PASSWORD</span>
        <input value={password} onInput={e => {
            setPassword(e.target.value)
        }} className='upload-celebrity-input' placeholder='title' />

        <Button 
            text='Crear celebrity'
            onClick ={handlePostItem}
            variant='success'
            className='upload-celebrity-button'
        />
    </div>)
}
